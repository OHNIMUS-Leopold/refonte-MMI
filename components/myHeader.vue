<script setup lang="ts">
const isMenuOpen = ref(false);
const menuTop = ref(0);
const isAnimated = ref(false);
const isHidden = ref(false);
const lastScrollTop = ref(0);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    if (isMenuOpen.value) {
        menuTop.value = window.scrollY; // Définit la position actuelle du scroll
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
};

onMounted(() => {
    isAnimated.value = true;
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
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
    <header class="hidden xl:block fixed top-8 left-1/2 -translate-x-1/2 z-10 bg-white py-2 px-4 rounded-[44px] w-4/5 mx-auto drop-shadow-lg" :class="{ 'expand': isAnimated, 'hide-expand': isHidden }">
        <nav class="text-gris text-xl font-poppins font-semibold flex justify-between items-center" :class="{ 'drop': isAnimated, 'hide-drop': isHidden }">
            <NuxtLink class="relative" to="/">
                <img src="@/assets/images/svg/mmi_logo-header.svg" alt="Logo" class="h-8 pl-2 pb-1">
            </NuxtLink>
            <NuxtLink class="relative animate" to="/la-formation">La Formation</NuxtLink>
            <NuxtLink class="relative animate" to="/le-departement">Le Département</NuxtLink>
            <NuxtLink class="relative animate" to="/international">International</NuxtLink>
            <NuxtLink class="relative animate" to="/contact">Contact</NuxtLink>
            <NuxtLink to="/candidater" class="font-medium text-lg font-manrope py-1 px-6 border-solid border-[3px] border-jaune bg-jaune rounded-3xl hover:bg-white duration-500">Candidater</NuxtLink>    
        </nav>
    </header>

    <header class="xl:hidden absolute top-0 left-0 z-10 w-full">
        <div class="flex items-center justify-between p-6">
            <img class="h-10" src="@/assets/images/svg/mmi_logo-white.svg" alt="Logo">
            <button @click="toggleMenu">
                <img class="h-10" src="@/assets/images/svg/icn/open-menu.svg" alt="Ouvrir le menu">
            </button>
        </div>


        <nav v-if="isMenuOpen" class="absolute top-0 left-0 z-20 bg-white h-screen w-full p-6 pl-11 text-gris text-xl font-poppins font-semibold grid grid-cols-1 justify-items-start gap-12 content-start" :style="{ top: menuTop + 'px' }">
            <div class="flex justify-between w-full items-start">
                <p class="font-poppins font-bold text-4xl text-noir mt-16">MENU</p>
                <button @click="toggleMenu">
                    <img src="@/assets/images/svg/icn/close-menu.svg" alt="Fermer le menu">
                </button>
            </div>
            <NuxtLink class="relative animate" to="/" @click="toggleMenu">Accueil</NuxtLink>
            <NuxtLink class="relative animate" to="/la-formation" @click="toggleMenu">La Formation</NuxtLink>
            <NuxtLink class="relative animate" to="/le-departement" @click="toggleMenu">Le Département</NuxtLink>
            <NuxtLink class="relative animate" to="/international" @click="toggleMenu">International</NuxtLink>
            <NuxtLink class="relative animate" to="/contact" @click="toggleMenu">Contact</NuxtLink>
            <hr class="border-t-2 border-noir" style="width: calc(100% - 20px);" >
            <NuxtLink to="/candidater" class="font-medium text-lg font-manrope py-1 px-6 border-solid border-[3px] border-jaune bg-jaune rounded-3xl hover:bg-white duration-500" @click="toggleMenu">Candidater</NuxtLink>    
            <div class="absolute bottom-5 left-1/2 -translate-x-1/2 flex justify-between space-x-6 mx-auto">
                <a href="https://www.facebook.com/mmimontbeliard/?locale=fr_FR">
                    <img class="h-8" src="@/assets/images/svg/icn/icon-facebook.svg" alt="Facebook">
                </a>
                <a href="https://www.linkedin.com/school/mmimontbeliard">
                    <img class="h-8" src="@/assets/images/svg/icn/icon-linkedin.svg" alt="LinkedIn">
                </a>
                <a href="https://www.instagram.com/mmi_montbeliard/">
                    <img class="h-8" src="@/assets/images/svg/icn/icon-instagram.svg" alt="Instagram">
                </a>
            </div>
        </nav>
    </header>
</template>



<style>

.overflow-hidden {
    overflow: hidden;
}

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
    45% {
        font-size: 0px;
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