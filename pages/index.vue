<script setup lang="ts">
import SlidingText from '~/components/slidingText.vue';
import heroImg from '@/assets/images/bitmap/home-test.png';
import type { SanityDocument } from '@sanity/client';

useSeoMeta({
    title: 'Accueil | MMI Montbéliard',
    description: 'Découvrez le département MMI de Montbéliard : une formation innovante en multimédia, web et communication pour préparer les talents de demain aux métiers du numérique.',
    ogImage: heroImg
});

const PROJETS_QUERY = groq`*[_type == "projet"] | order(date desc)[0...2] {
    _id,
    name,
    date,
    description,
    image,
    etiquetteMax2
}`;

const { data: projets } = await useSanityQuery<SanityDocument[]>(PROJETS_QUERY);

const {urlFor} = useSanityImage();

const containerHeight = ref(0);

const calculateHeight = () => {
    const width = document.documentElement.clientWidth * 0.98;
    const height = Math.floor((width * 9) / 16);
    containerHeight.value = height;
};

onMounted(() => {
    setTimeout(() => {
        calculateHeight();
    }, 80); 
    window.addEventListener("resize", calculateHeight); 
});

onUnmounted(() => {
    window.removeEventListener("resize", calculateHeight); 
});

</script>


<template>
    <main>
        <div class="my-[1%] hidden md:block">
            <div class="absolute w-full max-w-[98%] mx-[1%] bg-black opacity-[45%] rounded-xl" :style="{ height: containerHeight + 'px' }"/>
            <video id="intro" autoplay loop muted src="@/assets/videos/Video_introduction_MMI/Video_introduction_MMI.mp4" class="rounded-xl max-w-[98%] mx-[1%]"/>
            <img class="hidden xl:block absolute top-[24%] left-1/2 -translate-x-1/2 h-24" src="@/assets/images/svg/mmi_logo-white.svg" alt="Logo MMI">
            <h1 class="uppercase w-full text-center text-white absolute top-[22%] lg:top-[34%] xl:top-[48%] left-1/2 -translate-x-1/2">
                MMI Montbéliard
            </h1>
            <div class="absolute top-[38%] lg:top-[50%] xl:top-[70%] w-full text-center">
                <div class="block md:hidden space-x-[16%]">
                    <LandingButtonMini to="/la-formation">Découvrir la formation</LandingButtonMini>
                    <LandingButtonMini to="/candidater">Candidater</LandingButtonMini>
                </div>
                <div class="hidden md:block space-x-[16%]">
                    <LandingButton to="/la-formation">Découvrir la formation</LandingButton>
                    <LandingButton to="/candidater">Candidater</LandingButton>
                </div>
            </div>
        </div>
        
        <MyHero class="md:hidden" :image=heroImg alt="Bâtiment MMI" title="MMI Montbéliard"/>

        <div class="margin"> 

            <SecondHeading class="lg:mx-24" title-black="La formation de 3 ans qui vous prépare aux " title-yellow="métiers du multimédia" />

            <section class="grid grid-cols-1 xl:grid-cols-5 xl:gap-14 mb-12 md:mb-24">
                <div class="col-span-3 xl:flex xl:flex-col xl:gap-8">
                    <AnimatedHeading class="text-noir mb-8" title="MMI qu'est-ce que c'est ?" />
                    <p class="text-noir my-5 xl:m-0">
                        Le BUT MMI allie créativité, expertise digitale et développement web pour former des professionnels polyvalents, capables de concevoir des projets innovants et de s'adapter aux évolutions du secteur numérique. Grâce à une approche pratique et une immersion professionnelle, les étudiants développent des compétences en design, programmation et gestion de projets digitaux. Ce parcours d'excellence prépare les talents de demain à relever les défis du numérique en constante évolution.
                    </p>
                </div>
                <img class="h-28 md:h-40 lg:h-48 col-span-2 xl:place-self-end w-auto mx-auto px-10" src="@/assets/images/svg/mmi_logo-header.svg" alt="Logo MMI">
            </section>

            <section class="mb-12 md:mb-24">
                <div class="">
                    <AnimatedHeading class="text-noir mb-8" title="Des parcours qui vous mènent à la réussite" />
                    <p class="text-noir">
                        La formation MMI propose trois parcours. Chacun permet d'acquérir des compétences spécifiques afin de répondre aux besoins du secteur numérique et de la communication.
                    </p>
                </div>
            </section>
        </div>

        <ParcoursSection class="-mt-20 hidden lg:block" />

        <ParcoursSectionMini class="-mt-14 lg:hidden" />

        <SlidingText />

        <div class="margin">
            <section class="mb-12 md:mb-24">
                <AnimatedHeading class="text-noir mb-8" title="Donnez vie à des projets ambitieux" />
                <p class="text-noir my-5 xl:m-0">
                    Ces témoignages reflètent le parcours de nos étudiants, qui ont su tirer parti de notre formation pour s’épanouir dans le secteur numérique et la communication.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-[150px] xl:gap-[250px] mx-0 lg:mx-20 xl:mx-36 mt-5">
                    <div v-for="projet in projets" :key="projet._id" class="">
                        <div class="rounded-3xl overflow-hidden flex flex-col relative h-[500px]">
                            <img v-if="projet.image" :src="urlFor(projet.image)!.url()" :alt="projet.title" class="object-cover w-full h-full">
                            <div class="absolute bottom-0 flex flex-col justify-end ml-5 mb-5 md:ml-6 md:mb-6">
                                <p class="text-white font-poppins text-2xl md:text-3xl font-semibold">{{ projet.name }}</p>
                                <div v-if="projet.etiquetteMax2 && projet.etiquetteMax2.length" class="flex flex-wrap space-x-4 mt-2 md:mt-3">
                                    <p v-for="etiquette in projet.etiquetteMax2" :key="etiquette" class="tag font-manrope font-medium text-xs md:text-base rounded-3xl text-white py-2 md:py-3 px-4 md:px-6 border-solid border-[1px] border-white">{{ etiquette }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <AnimatedHeading class="text-noir mb-8" title="MMI c’est aussi des des rencontres et des parcours inspirants" />
                <p class="text-noir">
                    Intégrer le BUT MMI, c'est partir à la rencontre de professionnels, explorer des parcours variés et relever des défis concrets. Des expériences qui forgent des compétences et ouvrent de nouvelles perspectives, que ce soit à travers des projets locaux ou un semestre à l'international.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 md:gap-24 xl:gap-44">
                    <div>
                        <img class="my-3 md:mt-8" src="@/assets/images/bitmap/situation.png" alt="photo mise en situation professionnelle" >
                        <h3 class="text-noir border-l-[8px] md:border-l-[12px] border-jaune pl-2 md:pl-5">
                            Des mises en situations <br>professionnelles
                        </h3>
                    </div>
                    <div>
                        <img class="my-3 mt-8" src="@/assets/images/bitmap/canada.png" alt="photo canada" >
                        <h3 class="text-noir md:text-right border-0 border-l-[8px] md:border-l-0 md:border-r-[12px] border-gris pl-2 md:pr-5">
                            Un semestre <br>au Canada
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>