<template>
    <header class="absolute top-12 bg-white py-4 px-12 rounded-[44px] w-4/5 left-1/2 -translate-x-1/2 drop-shadow-lg">
        <nav class="text-gris text-[22px] font-poppins font-semibold flex justify-between items-center">
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


</style>