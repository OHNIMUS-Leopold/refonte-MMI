<template>
    <main>
        <div class="my-[1%]">
            <div class="absolute w-full max-w-[98%] mx-[1%] bg-black opacity-40 rounded-xl" :style="{ height: containerHeight + 'px' }"/>
            <video id="intro" autoplay loop muted src="@/assets/videos/Video_introduction_MMI/Video_introduction_MMI.mp4" class="rounded-xl max-w-[98%] mx-[1%]"/>
        </div>
        <!-- <div class="absolute w-full" :style="{ top: containerHeight / 4 + 'px'}">
            <img class="h-24 mx-auto mb-16" src="@/assets/images/svg/mmi_logo-white.svg" alt="Logo">
            <h1 class="h1 uppercase text-white text-center">MMI Montbéliard</h1>
        </div> -->
        <div class="static">
            <p class="">bla</p>
        </div>
    </main>
</template>


<script setup lang="ts">
const containerHeight = ref(0);

const calculateHeight = () => {
    const width = document.documentElement.clientWidth * 0.98;
    const height = Math.floor((width * 9) / 16);
    containerHeight.value = height;
};

onMounted(() => {
    calculateHeight();
    window.addEventListener("resize", calculateHeight); 
});

onUnmounted(() => {
    window.removeEventListener("resize", calculateHeight); 
});

</script>