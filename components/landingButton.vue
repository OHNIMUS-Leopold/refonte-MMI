<template>
    <RouterLink :to="to" class="duration-500 font-poppins text-xl font-bold py-3 px-10 text-white bg-transparent border-solid border-[3px] border-jaune hover:bg-jaune rounded-[10px]">
        <slot />
    </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
    to: string;
}>();
</script>