<script setup lang="ts">
import heroImg from '../assets/images/bitmap/home-test.png';


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


        <div class="static">
            <p class="">bla</p>
        </div>
    </main>
</template>