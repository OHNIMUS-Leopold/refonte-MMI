<script setup lang="ts">
defineProps<{
    href: string;
}>();
</script>


<template>
    <a :href="href" class="duration-500 font-poppins text-sm font-medium py-2 px-3 text-jaune bg-transparent border-solid border-2 border-jaune hover:bg-jaune hover:text-white rounded-[10px]">
        <slot />
    </a>
</template>