<template>
    <header class="fixed top-8 left-1/2 -translate-x-1/2 z-10 bg-white py-4 px-12 rounded-[44px] w-4/5 mx-auto drop-shadow-lg bubble">
        <nav class="text-gris text-[22px] font-poppins font-semibold flex justify-between items-center drop">
            <NuxtLink class="relative animate" to="/">Home</NuxtLink>
            <NuxtLink class="relative animate" to="/about">La Formation</NuxtLink>
            <NuxtLink class="relative animate" to="/">Le Département</NuxtLink>
            <NuxtLink class="relative animate" to="/">International</NuxtLink>
            <NuxtLink class="relative animate" to="/">Contact</NuxtLink>
            <NuxtLink to="/" class="font-medium text-xl py-2 px-5 border-solid border-[3px] border-jaune bg-jaune rounded-3xl hover:bg-white duration-500">Candidater</NuxtLink>    
        </nav>
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

.bubble {
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
        font-size: 14px;
    }
    40% {
        transform: translateY(-200px); 
        opacity: 0;
        font-size: 22px;
    }
    55% {
        opacity: 0;
    }
    60% {
        transform: translateY(0px); 
        opacity: 1;
        font-size: 22px;
    }
    100% {
        transform: translateY(0px); 
        opacity: 1;
        font-size: 22px;
    }
}


</style>