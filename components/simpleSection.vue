<script setup lang="ts">
defineProps<{
    headingTitle: string;
    paragraphText: string;
    imageSrc: string;
    imageAlt: string;
}>();
</script>


<template>
    <section class="grid grid-cols-1 xl:grid-cols-5 xl:gap-14 mb-12 md:mb-24">
        <div class="col-span-3 xl:flex xl:flex-col xl:gap-4">
            <AnimatedHeading class="text-noir mb-8" :title="headingTitle" />
            <p class="text-noir my-5 xl:m-0" v-html="paragraphText"/>
        </div>
        <img class="col-span-2 xl:place-self-end w-auto mx-auto rounded-3xl" :src="imageSrc" :alt="imageAlt">
    </section>
</template>