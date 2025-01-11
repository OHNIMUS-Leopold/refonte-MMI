<script setup lang="ts">
defineProps<{
    titleBlack: string;
    titleYellow: string;
}>();
</script>


<template>
    <div>
        <div class="text-center">
            <h2 class="mb-1 md:mb-5 relative inline-block">
                <span class="text-noir">
                    {{ titleBlack }}
                </span>
                <span class="text-jaune">
                    {{ titleYellow }}
                </span>
                <div class="absolute -top-6 -right-5 md:-right-8 ">
                    <img class="" src="@/assets/images/svg/3lines-y.svg" alt="">
                </div>
            </h2>
        </div>
        
        <img class="hidden md:block mx-auto mb-12 md:mb-24" src="@/assets/images/svg/underline-y.svg" alt="">
        <img class="md:hidden mx-auto mb-12 md:mb-24" src="@/assets/images/svg/underline-y-mini.svg" alt="">
    </div>
</template>