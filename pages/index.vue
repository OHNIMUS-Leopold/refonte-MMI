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

        <div class="margin pb-[600px]"> 

            <SecondHeading class="lg:mx-24" title-black="La formation de 3 ans qui vous prépare aux " title-yellow="métiers du multimédia" />

            <section class="grid grid-cols-1 xl:grid-cols-5 xl:gap-14 mb-12 md:mb-24">
                <div class="col-span-3 xl:flex xl:flex-col xl:gap-8">
                    <AnimatedHeading class="text-noir mb-8" title="MMI qu'est-ce que c'est ?" />
                    <p class="text-noir my-5 xl:m-0">
                        Le BUT MMI allie créativité, expertise digitale et développement web pour former des professionnels polyvalents, capables de concevoir des projets innovants et de s'adapter aux évolutions du secteur numérique. Grâce à une approche pratique et une immersion professionnelle, les étudiants développent des compétences en design, programmation et gestion de projets digitaux. Ce parcours d'excellence prépare les talents de demain à relever les défis du numérique en constante évolution.
                    </p>
                </div>
                <img class="h-28 md:h-40 lg:h-48 col-span-2 xl:place-self-end w-auto mx-auto px-10" src="../assets/images/svg/mmi_logo-header.svg" alt="Logo MMI">
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
    </main>
</template>