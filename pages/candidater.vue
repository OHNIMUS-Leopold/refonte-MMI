<script setup lang="ts">
import heroImg from '../assets/images/bitmap/home-test.png';
</script>

<template>
    <main>
        <MyHero :image=heroImg alt="Bâtiment MMI" title="Candidater"/>

        <div class="margin">
            <div class="text-center">
                <h2 class="mb-5 relative inline-block">
                    <span class="text-noir">
                        Rejoignez le département
                    </span>
                    <span class="text-jaune">
                        MMI Montbéliard
                    </span>
                    <div class="absolute -top-6 -right-8 ">
                        <img class="" src="@/assets/images/svg/3lines-y.svg" alt="">
                    </div>
                </h2>
            </div>
            
            <img class="mx-auto mb-16 md:mb-32" src="@/assets/images/svg/underline-y.svg" alt="">
            
            
            <section class="grid grid-cols-1 xl:grid-cols-5 xl:gap-14">
                <div class="col-span-3 xl:flex xl:flex-col xl:justify-between">
                    <h3 class="text-noir mb-8">
                        Pourquoi Choisir MMI Montbéliard ?
                    </h3>
                    <p class="text-noir my-5 xl:m-0">
                        Le département MMI Montbéliard offre une formation pluridisciplinaire qui permet de maîtriser la création de contenu multimédia, le design, le développement web, et la communication digitale, entre autres compétences. Vous évoluerez dans un environnement stimulant où vous participerez à des projets concrets et collaborerez avec des professionnels du secteur. Nos espaces de travail sont équipés des dernières technologies pour vous accompagner dans le développement de vos projets. De plus, vous aurez l’opportunité d’intégrer des entreprises partenaires lors de stages, enrichissant ainsi votre expérience et vos perspectives professionnelles.
                    </p>
                </div>
                <img class="col-span-2 xl:place-self-end w-auto" src="../assets/images/bitmap/home-test.png" alt="">
                
            </section>










            <div id="ici">
                blalalallalfjebfiub
            </div>
        </div>










       

    </main>
</template>