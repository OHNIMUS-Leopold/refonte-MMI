<template>
    <main>
        <div class="my-[1%]">
            <div class="absolute w-full max-w-[98%] mx-[1%] bg-black opacity-[45%] rounded-xl" :style="{ height: containerHeight + 'px' }"/>
            <video id="intro" autoplay loop muted src="@/assets/videos/Video_introduction_MMI/Video_introduction_MMI.mp4" class="rounded-xl max-w-[98%] mx-[1%]"/>
        </div>
        <!-- <div class="hidden xl:block absolute w-full" :style="{ top: containerHeight / 4 + 'px'}">
            <img class="h-24 mx-auto" src="@/assets/images/svg/mmi_logo-white.svg" alt="Logo">
            <h1 class="uppercase text-white text-center mt-16 mb-14">MMI Montbéliard</h1>
            <div class="flex justify-center space-x-24 mt-8">
                <LandingButton to="/la-formation">Découvrir la formation</LandingButton>
                <LandingButton to="/candidater">Candidater</LandingButton>
            </div>
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
    setTimeout(() => {
        calculateHeight();
    }, 80); 
    window.addEventListener("resize", calculateHeight); 
});

onUnmounted(() => {
    window.removeEventListener("resize", calculateHeight); 
});

</script>