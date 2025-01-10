<template>
    <footer class="grid grid-cols-1 justify-items-center gap-6 items-center md:flex md:gap-y-4 md:gap-x-6 md:flex-wrap md:justify-between  bg-white py-14 px-11 border-t-2 border-jaune">
        <img src="@/assets/images/svg/mmi_logo-header.svg" class="w-28" alt="Logo">
        <div class="grid grid-cols-1 text-gris font-poppins text-base text-center">
            <p class="font-semibold">MMI MONTBÉLIARD</p>
            <p class="font-light">Métiers du multimédia et de l'internet</p>
            <p>
                <span class="font-semibold">IUT </span><span class="font-light">NORD FRANCHE-COMTÉ</span>
            </p>
        </div>
        <div class="flex space-x-7">
            <NuxtLink class="font-poppins font-medium text-base text-gris md:text-lg" to="/mentions-legales">Mentions légales</NuxtLink>
            <NuxtLink class="font-poppins font-medium text-base text-gris md:text-lg" to="/confidentialite">Confidentialité</NuxtLink>
        </div>
        <NuxtLink to="/candidater" class="md:hidden font-medium text-lg font-poppins py-[10px] px-6 border-solid border-[3px] border-jaune bg-jaune rounded-xl hover:bg-white duration-500">Candidater</NuxtLink>    
        <div class="flex justify-between space-x-6">
            <a href="https://www.facebook.com/mmimontbeliard/?locale=fr_FR">
                <img class="h-10" src="@/assets/images/svg/icn/icon-facebook.svg" alt="Facebook">
            </a>
            <a href="https://www.linkedin.com/school/mmimontbeliard">
                <img class="h-10" src="@/assets/images/svg/icn/icon-linkedin.svg" alt="LinkedIn">
            </a>
            <a href="https://www.instagram.com/mmi_montbeliard/">
                <img class="h-10" src="@/assets/images/svg/icn/icon-instagram.svg" alt="Instagram">
            </a>
        </div>
        <NuxtLink to="/candidater" class="hidden md:block font-medium text-lg font-poppins py-[10px] px-6 border-solid border-[3px] border-jaune bg-jaune rounded-xl hover:bg-white duration-500">Candidater</NuxtLink>
    </footer>
</template>