<template>
    <div>
        <div v-show="allLoaded" class="relative w-full h-screen flex items-center justify-center bg-gray-900">
            <div class="relative w-full h-full overflow-hidden">
                <video
                    v-for="video in allVideos"
                    :key="video.name"
                    :src="video.src"
                    v-show="currentVideo === video.name"
                    ref="videos"
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
        <div>
            dzkdziub
        </div>
    </div>
</template>
  

<script setup lang="ts">
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