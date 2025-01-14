<script setup lang="ts">
defineProps<{
    to: string;
}>();
</script>


<template>
    <RouterLink :to="to" class="duration-500 font-poppins text-sm font-medium py-2 px-3 text-jaune bg-transparent border-solid border-2 border-jaune hover:bg-jaune hover:text-white rounded-[10px]">
        <slot />
    </RouterLink>
</template>