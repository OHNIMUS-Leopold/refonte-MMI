<script setup lang="ts">
defineProps<{
    to: string;
}>();
</script>


<template>
    <RouterLink :to="to" class="duration-500 font-poppins text-sm font-bold p-2 text-white bg-transparent border-solid border-[3px] border-jaune hover:bg-jaune rounded-[10px]">
        <slot />
    </RouterLink>
</template>