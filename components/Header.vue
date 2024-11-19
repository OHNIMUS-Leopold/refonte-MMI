<template>
    <header class="fixed top-8 left-1/2 -translate-x-1/2 z-10 bg-white py-4 px-12 rounded-[44px] w-4/5 mx-auto drop-shadow-lg bubble">
        <nav class="text-gris text-[22px] font-poppins font-semibold flex justify-between items-center drop">
            <NuxtLink class="relative animate" to="/">Home</NuxtLink>
            <NuxtLink class="relative animate" to="/about">La Formation</NuxtLink>
            <NuxtLink class="relative animate" to="/">Le Département</NuxtLink>
            <NuxtLink class="relative animate" to="/">International</NuxtLink>
            <NuxtLink class="relative animate" to="/">Contact</NuxtLink>
            <div class="font-medium text-xl py-[10px] px-[22px] outline outline-jaune bg-jaune rounded-3xl hover:bg-white duration-500">
                <NuxtLink to="/">Candidater</NuxtLink>
            </div>
        </nav>
    </header>
</template>



<style>

.animate::after {
    content: '';
    position: absolute;
    height: 2px;
    left: 0;
    bottom: 3px;
    width: 26px;
    background: #FFD53E;
    transition: width .4s;
    z-index: 20;
}

.animate:hover::after {
    width: 100%;
}

.bubble {
    animation: expand 1s ease-in-out;
}

@keyframes expand {
    0% {
        width: 5%;
    }
    100% {
        width: 80%;
    }
}

.drop {
    animation: dropdown 1s ease-in-out;
}

@keyframes dropdown {
    0% {
        opacity: 0;
        transform: translateY(20px);
        font-size: 0px;
    }

    80% {
        opacity: 0;
        transform: translateY(-10px);
        /* font-size: 22px; */
    }

    100% {
        opacity: 1;
        transform: translateY(0);
        font-size: 22px;
    }
}
</style>