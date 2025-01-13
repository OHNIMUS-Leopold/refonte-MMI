<script setup lang="ts">
defineProps<{
    to: string;
}>();
</script>


<template>
    <NuxtLink :to="to" class="contents">
        <div class="flex items-center space-x-16 text-noir py-2 px-7 border-solid border-[1px] border-noir w-fit">
            <p>Découvrir </p>
            <p>→</p>
        </div>
    </NuxtLink>
</template>