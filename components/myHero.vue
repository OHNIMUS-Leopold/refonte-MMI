<script setup lang="ts">
defineProps<{
    image: string;
    alt: string;
    title: string;
}>();
</script>

<template>
    <div>
        <img :src=image class="xl:hidden w-full h-[50vh] object-cover" :alt=alt>
        <div class="hidden p-[1%] h-screen xl:flex items-center w-auto overflow-hidden">
            <img :src=image class="object-cover max-h-full w-full rounded-xl" :alt=alt>
        </div>
        <img class="hidden xl:block absolute top-[24%] left-1/2 -translate-x-1/2 h-24" src="@/assets/images/svg/mmi_logo-white.svg" alt="">
        <h1 class="uppercase text-white absolute top-[22%] xl:top-[48%] left-1/2 -translate-x-1/2">
            {{title}}
        </h1>
        <div class="absolute top-[34%] xl:top-[70%] w-full text-center">
            <div class="block xl:hidden space-x-[16%]">
                <LandingButtonMini to="/la-formation">Découvrir la formation</LandingButtonMini>
                <LandingButtonMini to="/candidater">Candidater</LandingButtonMini>
            </div>
            <div class="hidden xl:block space-x-[16%]">
                <LandingButton to="/la-formation">Découvrir la formation</LandingButton>
                <LandingButton to="/candidater">Candidater</LandingButton>
            </div>
        </div>
    </div>
</template>