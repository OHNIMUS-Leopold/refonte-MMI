<script setup lang="ts">
defineProps<{
    title: string;
}>();

const h3Ref = ref(null);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-souligne');
            }
        });
    });

    if (h3Ref.value) {
        observer.observe(h3Ref.value);
    }
});

</script>


<template>
    <h3 ref="h3Ref" class="relative souligne w-fit">
        {{ title }}
    </h3>
</template>


<style scoped>

.souligne::after {
    content: '';
    position: absolute;
    height: 5px;
    left: 0;
    bottom: -12px;
    width: 25%;
    background: #FFD53E;
    transition: width .4s;
    z-index: 20;
    /* animation: allerretour 1s ease-in-out forwards; */
}

.animate-souligne::after {
    animation: allerretour 1s ease-in-out forwards;
}

@keyframes allerretour {
    0% {
        width: 25%;
    }
    100% {
        width: 66%;
    }
} 

</style>