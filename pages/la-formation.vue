<script setup lang="ts">
import alternanceImg from '@/assets/images/bitmap/stage-alternance.png';
import vanierImg from '@/assets/images/bitmap/cgep-vanier-grand.png';

const currentYear = ref(1);
const isTransitioning = ref(false);
const allLoaded = ref(false);

const otherYears = computed(() => {
    return [1, 2, 3].filter(year => year !== currentYear.value);
});

const videoFiles = import.meta.glob('@/assets/videos/{transitions,stills}/*.mp4', { eager: true });
console.log('Videos loaded:', videoFiles);

onMounted(() => {
    allLoaded.value = true;
});

function getAssetPath(relativePath: string): string {
    const videoFile = videoFiles[`/assets/videos${relativePath}`];
    return videoFile && typeof videoFile === 'object' && 'default' in videoFile ? (videoFile.default as string) : '';
}

const currentVideo = ref<string>(`still-${currentYear.value}`);

const allVideos = [
    { name: 'still-1', src: getAssetPath('/stills/still-1.mp4') },
    { name: 'still-2', src: getAssetPath('/stills/still-2.mp4') },
    { name: 'still-3', src: getAssetPath('/stills/still-3.mp4') },
    { name: 'transition-1-to-2', src: getAssetPath('/transitions/transition-1-to-2.mp4') },
    { name: 'transition-1-to-3', src: getAssetPath('/transitions/transition-1-to-3.mp4') },
    { name: 'transition-2-to-1', src: getAssetPath('/transitions/transition-2-to-1.mp4') },
    { name: 'transition-2-to-3', src: getAssetPath('/transitions/transition-2-to-3.mp4') },
    { name: 'transition-3-to-1', src: getAssetPath('/transitions/transition-3-to-1.mp4') },
    { name: 'transition-3-to-2', src: getAssetPath('/transitions/transition-3-to-2.mp4') },
];

const videos = ref<HTMLVideoElement[]>([]);


function resetVideos() {
    videos.value.forEach(video => {
        video.currentTime = 0;
        video.pause();
    });
}

function playCurrentVideo() {
    const currentVideoElement = videos.value.find(video => video.src.includes(currentVideo.value));
    if (currentVideoElement) {
        currentVideoElement.play();
    }
}

function changeYear(newYear: number) {
    if (isTransitioning.value) return;

    resetVideos();

    const transitionVideo = `transition-${currentYear.value}-to-${newYear}`;
    currentVideo.value = transitionVideo;
    playCurrentVideo();
    isTransitioning.value = true;

    setTimeout(() => {
        currentYear.value = newYear;
        currentVideo.value = `still-${newYear}`;
        playCurrentVideo();
        isTransitioning.value = false;
    }, 5000); // Durée de la vidéo de transition
}

function onVideoEnded() {
    if (isTransitioning.value) {
        currentVideo.value = `still-${currentYear.value}`;
        playCurrentVideo();
        isTransitioning.value = false;
    }
}
</script>


<template>
    <main>
        <div v-show="allLoaded" class="relative w-full h-screen flex items-center justify-center bg-gray-900">
            <div class="relative w-full h-full overflow-hidden">
                <video
                    v-for="video in allVideos"
                    v-show="currentVideo === video.name"
                    :key="video.name"
                    ref="videos"
                    :src="video.src"
                    autoplay
                    muted
                    loop
                    class="w-full h-full"
                    @ended="onVideoEnded"
                />
            </div>


            <div class="absolute bottom-10 flex space-x-4">
                <button
                    v-for="year in otherYears"
                    :key="year"
                    class="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-200"
                    @click="changeYear(year)"
                >
                    Les {{ year }}ème année
                </button>
            </div>
        </div>
        <div v-show="!allLoaded">
            loader
        </div>





        <div class="margin">
            
            <section class="mb-12 md:mb-24">
                <SecondHeading class="lg:w-4/5 xl:w-3/5 mx-auto" title-black="Les parcours " title-yellow="disponibles" />
                <p class="text-noir">
                    La formation MMI propose trois parcours. Chacun permet d'acquérir des compétences spécifiques afin de répondre aux besoins du secteur numérique et de la communication.
                </p>
            </section>
            
        </div>
        <ParcoursSection class="-mt-20 hidden lg:block" />

        <ParcoursSectionMini class="-mt-14 lg:hidden" />

        <div class="margin">
            <section class="mb-12 md:mb-24">
                <AnimatedHeading class="text-noir mb-8" title="Le programme" />
                <p class="text-noir my-5 xl:m-0">
                    En première année, vous explorez toutes les spécialités pour acquérir une base solide et découvrir ce qui vous plaît. À partir de la deuxième année, vous pourrez choisir l’un des trois parcours proposés et vous y spécialiser jusqu’à la fin du Bachelor.
                    <br>
                    En troisième année, vous suivrez principalement des cours liés à votre spécialité, ainsi que quelques enseignements généraux comme l'anglais.
                    <br>
                    Cette organisation vous donne le temps d'explorer chaque parcours et de choisir celui qui vous correspond le mieux pour vous perfectionner dans ce domaine.
                </p>

                <YearsTable />
            </section>

            <SimpleSection
                headingTitle="Stage et alternance"
                paragraphText="Au cours de cette formation, des stages en entreprise sont obligatoires en 2ème et 3ème année. Le stage de 2ème année dure 10 semaines, tandis que celui de 3ème année s’étend sur 16 semaines, généralement de mars à la fin de l'année scolaire. Ces périodes vous permettent d'acquérir une solide expérience professionnelle.<br><br>Il est également possible de signer un contrat d’alternance dès la 2ème année jusqu'à la fin de la formation. En alternance, vous suivrez un rythme précis entre école et entreprise et serez dispensé de stage, étant déjà en activité professionnelle."
                :imageSrc="alternanceImg"
                imageAlt="Étudiants de MMI en stage"
            />   

            <SimpleSection
                headingTitle="L'international"
                paragraphText="Le département est en partenariat avec des universités étrangères, offrant ainsi aux étudiants la possibilité de partir un semestre à l’étranger. Cette expérience permet de découvrir de nouvelles cultures, d'améliorer ses compétences linguistiques et d’élargir ses connaissances dans un environnement international.<br><br>En étudiant dans des établissements partenaires, vous pourrez enrichir votre parcours académique et personnel, développer votre ouverture d'esprit et renforcer votre profil professionnel dans un contexte global."
                :imageSrc="vanierImg"
                imageAlt="CGEP de Vanier"
                style="margin-bottom: 20px;"
            />      

            <div class="flex justify-center xl:justify-start">
                <TransparentButtonY class="hidden md:block w-fit" to="/international">
                    Découvrir
                </TransparentButtonY>
                <TransparentButtonYMini class="md:hidden" to="/international">
                    Découvrir
                </TransparentButtonYMini>
            </div>
        </div>
    </main>
</template>