<script setup lang="ts">
const headerBreakpoint = ref(false);
const isAnimated = ref(false);
const isHidden = ref(false);
const lastScrollTop = ref(0);

const updateScreenWidth = () => {
    if (typeof window !== 'undefined') {
        headerBreakpoint.value = window.innerWidth > 1280;
    }
};

onMounted(() => {
    updateScreenWidth(); 
    isAnimated.value = true;
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', updateScreenWidth);
});

const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop.value) {
        isAnimated.value = false;
        isHidden.value = true;
    } else {
        isAnimated.value = true;
        isHidden.value = false;
    }
    lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop; 
};
</script>

<template>
    <header v-if="headerBreakpoint" class="fixed top-8 left-1/2 -translate-x-1/2 z-10 bg-white py-2 px-4 rounded-[44px] w-4/5 mx-auto drop-shadow-lg" :class="{ 'expand': isAnimated, 'hide-expand': isHidden }">
        <nav class="text-gris text-xl font-poppins font-semibold flex justify-between items-center" :class="{ 'drop': isAnimated, 'hide-drop': isHidden }">
            <NuxtLink class="relative" to="/">
                <img src="@/assets/images/svg/mmi_logo-header.svg" alt="Logo" class="h-8 pl-2 pb-1">
            </NuxtLink>
            <NuxtLink class="relative animate" to="/about">La Formation</NuxtLink>
            <NuxtLink class="relative animate" to="/">Le Département</NuxtLink>
            <NuxtLink class="relative animate" to="/">International</NuxtLink>
            <NuxtLink class="relative animate" to="/">Contact</NuxtLink>
            <NuxtLink to="/" class="font-medium text-lg font-manrope py-1 px-6 border-solid border-[3px] border-jaune bg-jaune rounded-3xl hover:bg-white duration-500">Candidater</NuxtLink>    
        </nav>
    </header>

    <header v-else class="absolute">
        ddz
    </header>
</template>



<style>

.animate::after {
    content: '';
    position: absolute;
    height: 2px;
    left: 0;
    bottom: 2px;
    width: 26px;
    background: #FFD53E;
    transition: width .4s;
    z-index: 20;
}

.animate:hover::after {
    width: 100%;
}

.expand {
    animation: expand 2s ease-in-out;
}

@keyframes expand {
    0% {
        width: 5%;
    }
    50% {
        width: 80%;
    }
    100% {
        width: 80%;
    }
}

.drop {
    animation: drop 2s ease-in-out;
}

@keyframes drop {
    0% {
        transform: translateY(-200px); 
        opacity: 0;
        font-size: 0px;
    }
    30% {
        transform: translateY(-200px); 
        opacity: 0;
        font-size: 0px;
    }
    40% {
        transform: translateY(-200px); 
        opacity: 0;
        font-size: 20px;
    }
    55% {
        opacity: 0;
    }
    60% {
        transform: translateY(0px); 
        opacity: 1;
        font-size: 20px;
    }
    100% {
        transform: translateY(0px); 
        opacity: 1;
        font-size: 20px;
    }
}

.hide-expand {
    animation: hide-expand 2s ease-in-out forwards;
}

@keyframes hide-expand {
    0% {
        width: 80%;
    }
    20% {
        width: 80%;
    }
    60% {
        width: 5%;
        opacity: 0;
    }
    100% {
        width: 5%;
        opacity: 0;
    }
}

.hide-drop {
    animation: hide-drop 2s ease-in-out forwards;
}

@keyframes hide-drop {
    0% {
        transform: translateY(0px); 
        opacity: 1;
        font-size: 20px;
    }
    10% { 
        opacity: 0;
    }
    50% {
        transform: translateY(-200px); 
        opacity: 0;
        font-size: 0px;
    }
    100% {
        transform: translateY(-200px); 
        opacity: 0;
        font-size: 0px;
    }
}

</style>