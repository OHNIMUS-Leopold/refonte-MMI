<template>
    <footer class="flex justify-between items-center bg-white py-14 px-11 border-t-2 border-jaune">
        <img src="@/assets/images/svg/mmi_logo-header.svg" alt="Logo">
        <div class="grid grid-cols-1 text-gris font-poppins text-base text-center">
            <p class="font-semibold">MMI MONTBÉLIARD</p>
            <p class="font-light">Métiers du multimédia et de l'internet</p>
            <p>
                <span class="font-semibold">IUT</span><span class="font-light">NORD FRANCHE-COMTÉ</span>
            </p>
        </div>
        <NuxtLink class="font-poppins font-medium text-base text-gris" to="/mentions-legales">Mentions légales</NuxtLink>
        <NuxtLink class="font-poppins font-medium text-base text-gris" to="/confidentialite">Confidentialité</NuxtLink>
        <div class="flex justify-between space-x-8">
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
        <NuxtLink to="/candidater" class="font-medium text-xl font-poppins py-[10px] px-6 border-solid border-[3px] border-jaune bg-jaune rounded-xl hover:bg-white duration-500">Candidater</NuxtLink>    
    </footer>
</template>