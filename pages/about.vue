<template>
    <div class="relative w-full h-screen flex items-center justify-center bg-gray-900">
        <div class="relative w-full h-full overflow-hidden">
            <video
                v-if="currentVideo"
                :src="currentVideo"
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
    <div>
        dzkdziub
    </div>
</template>
  



<script setup lang="ts">
import { ref, computed } from 'vue';

const currentYear = ref(1);
const isTransitioning = ref(false);

const videoFiles = import.meta.glob('@/assets/videos/**/*.mp4', { eager: true });

function getAssetPath(relativePath: string): string {
    const videoFile = videoFiles[`/assets/videos${relativePath}`];
    return videoFile && typeof videoFile === 'object' && 'default' in videoFile ? (videoFile.default as string) : '';
}

const currentVideo = ref<string>(getAssetPath(`/stills/still-${currentYear.value}.mp4`));

const otherYears = computed(() => {
    return [1, 2, 3].filter(year => year !== currentYear.value);
});

function changeYear(newYear: number) {
    if (isTransitioning.value) return;

    const transitionVideo = getAssetPath(`/transitions/transition-${currentYear.value}-to-${newYear}.mp4`);
    currentVideo.value = transitionVideo;
    isTransitioning.value = true;

    setTimeout(() => {
        currentYear.value = newYear;
        currentVideo.value = getAssetPath(`/stills/still-${newYear}.mp4`);
        isTransitioning.value = false;
    }, 5000); // Durée de la vidéo de transition
}

function onVideoEnded() {
    if (isTransitioning.value) {
        currentVideo.value = getAssetPath(`/stills/still-${currentYear.value}.mp4`);
        isTransitioning.value = false;
    }
}
</script>