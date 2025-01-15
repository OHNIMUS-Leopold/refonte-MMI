<script setup lang="ts">
import type { SanityDocument } from '@sanity/client';
import departementHero from '@/assets/images/bitmap/home-test.png';

const ACTUALITES_QUERY = groq`*[_type == "actualite"] | order(publishedAt desc)[0...2] {
    _id,
    title,
    image,
    description,
    publishedAt
}`;

const { data: actualite } = await useSanityQuery<SanityDocument[]>(ACTUALITES_QUERY);

const TEMOIGNAGES_QUERY = groq`*[_type == "temoignage"] | order(graduationYear desc)[0...2] {
    _id,
    firstName,
    graduationYear,
    description
}`;

const { data: temoignages } = await useSanityQuery<SanityDocument[]>(TEMOIGNAGES_QUERY);

const PROFS_QUERY = groq`*[_type == "prof"] | {
    _id,
    name,
    specialization,
    roundImage
}`;

const { data: profs } = await useSanityQuery<SanityDocument[]>(PROFS_QUERY);

const {urlFor} = useSanityImage()

</script>



<template>
    <main>
        <MyHero :image=departementHero alt="Bâtiment du département MMI" title="Le département"/>

        <div class="margin" style="margin-bottom: 0;"> 

            <SecondHeading class="lg:w-3/5 xl:w-2/5 mx-auto" title-black="Le " title-yellow="département" />

            <section class="grid grid-cols-1 xl:grid-cols-5 xl:gap-14">
                <div class="col-span-3 xl:flex xl:flex-col xl:gap-4">
                    <AnimatedHeading class="text-noir mb-8" title="La localisation" />
                    <p class="text-noir my-5 xl:m-0">
                        Depuis plus de vingt ans, le département MMI de Montbéliard prépare les futurs experts du web et du multimédia. Chaque année, ce sont près de quatre-vingts étudiants qui intègrent notre formation pour se lancer dans les métiers du numérique.
                        <br>Grâce à une collaboration étroite avec des professionnels du secteur, notre équipe pédagogique offre un enseignement riche et diversifié, conçu pour former en deux ans des spécialistes du web, prêts à relever les défis du monde digital.
                    </p>
                </div>
                <div class="col-span-2 xl:place-self-end w-full h-full" >
                    <iframe class="w-full h-full mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.714464850608!2d6.802704075879118!3d47.495475595645296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4792172655793f9f%3A0x1b3b0f76560084ad!2sD%C3%A9partement%20MMI%20de%20Montb%C3%A9liard!5e0!3m2!1sfr!2sfr!4v1736928381232!5m2!1sfr!2sfr" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                    <div class="grid grid-cols-3 my-2">
                        <p class="col-span-2 text-noir text-sm">
                            4 place Tharradin 25200 Montbéliard
                            <br>tél : +33 (0)3 81 99 47 34
                        </p>
                        <div class="flex space-x-2 sm:space-x-4 place-self-end my-auto">
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
                    </div>
                </div>
            </section>
        </div>

        <div class="pt-32 md:pt-36">
            <img class="object-cover h-[150px] md:h-auto" src="@/assets/images/bitmap/bande-contact.png" alt="Étudiants qui travaillent">
        </div>
        
        <div class="margin">
            <section class="mb-12 md:mb-24">
                <AnimatedHeading class="text-noir mb-8" title="Les actualités" />
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-16 xl:gap-36">
                    <div v-for="actu in actualite" :key="actu._id" class="">
                        <div class="">
                            <img v-if="actu.image" :src="urlFor(actu.image)!.url()" :alt="actu.title" class="">
                            <p class="text-noir font-manrope font-bold text-lg md:text-2xl mt-2 md:mt-3 mb-0 md:mb-1">{{ actu.title }}</p>
                            <p class="text-noir">{{ actu.description }}</p>
                        </div>
                    </div>
                </div>
            </section>


            <section class="mb-12 md:mb-24">
                <AnimatedHeading class="text-noir mb-8" title="Avis & Retours de nos étudiants" />
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10 xl:gap-36">
                    <div v-for="temoignage in temoignages" :key="temoignage._id" class="border-noir border-2 rounded-3xl p-10 md:py-16 md:px-28">
                        <p class="relative text-noir font-manrope text-lg md:text-xl font-normal">
                            {{ temoignage.description }}
                            <span class="absolute -top-6 -right-5 md:-right-8">
                                <img class="" src="@/assets/images/svg/3lines-y.svg" alt="">
                            </span>
                        </p>
                        <p class="mt-5 text-noir font-manrope text-lg md:text-xl font-normal">― {{ temoignage.firstName }}, diplômé(e) en {{ temoignage.graduationYear }}</p>
                    </div>
                </div>
            </section>


            <section>
                <AnimatedHeading class="text-noir mb-3 md:mb-8" title="Corps enseignant" />
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-40">
                    <div v-for="prof in profs" :key="prof._id" class="grid grid-cols-3 mt-5">
                        <img v-if="prof.roundImage" :src="urlFor(prof.roundImage)!.url()" :alt="prof.name" class="">
                        <div class="col-span-2 text-noir text-center place-self-center mx-3">
                            <p class="font-bold font-poppins text-lg md:text-2xl mb-1">{{ prof.name }}</p>
                            <p class="">{{ prof.specialization }}</p>
                        </div>
                    </div>
                </div>
            
            </section>
        </div>
        
        
        
        
    </main>
</template>