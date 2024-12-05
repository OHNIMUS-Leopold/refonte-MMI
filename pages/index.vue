<template>
    <main>
        <div class="my-[2vh]">
            <div class="absolute w-[97vw] left-1/2 -translate-x-1/2 bg-black opacity-40 rounded-xl" :style="{ height: containerHeight + 'px' }"/>
            <video id="intro" autoplay loop muted src="@/assets/videos/Video_introduction_MMI/Video_introduction_MMI.mp4" class="rounded-xl w-[97vw] mx-auto"/>
        </div>
        <div class="static ">
            <p class="">bla</p>
        </div>
    </main>
</template>


<script setup lang="ts">
const containerHeight = ref(0);

const calculateHeight = () => {
    const width = window.innerWidth * 0.97;
    const height = Math.floor((width * 9) / 16);
    // if (width >= 1020) {
    //     height -= 10;
    // }
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