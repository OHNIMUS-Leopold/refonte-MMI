<script setup lang="ts">
import type { SanityDocument } from '@sanity/client';
import heroImg from '@/assets/images/bitmap/hero-crea.png'
import creaSection from '@/assets/images/bitmap/section-crea.png'

useSeoMeta({
    title: 'Parcours création numérique | MMI Montbéliard',
    description: "Explorez le parcours Création Numérique du département MMI de Montbéliard : une spécialisation alliant design, multimédia et technologies pour donner vie à vos projets numériques.",
    ogImage: heroImg
});

const PROJETS_QUERY = groq`*[_type == "projet" && domaine == "crea"] | order(date desc)[0...2] {
    _id,
    name,
    date,
    description,
    image,
    etiquetteMax2
}`;

const { data: projets } = await useSanityQuery<SanityDocument[]>(PROJETS_QUERY);

const {urlFor} = useSanityImage()
</script>


<template>
    <main>
        <MyHero :image=heroImg alt="Étudiant en train de faire du design" title="Création numérique"/>

        <div class="margin" style="position: relative;">
            <SimpleSection
                heading-title="Le parcours création numérique qu’est ce que c’est ?"
                paragraph-text="Le parcours en création numérique propose une immersion dans le monde des contenus visuels et interactifs. En trois ans, vous apprendrez à concevoir des projets multimédias alliant créativité et technicité, tels que des visuels pour le web, l'animation, et des productions interactives.<br><br>Le programme couvre des compétences variées : photographie numérique, modélisation 3D, montage sonore et design d'interfaces immersives. Vous maîtriserez ainsi les logiciels essentiels de l'industrie pour créer des œuvres visuelles impactantes et professionnelles."
                :image-src="creaSection"
                image-alt="Photo de dessins et de croquis"
                style="margin-bottom: 20px;"
                />    

            <section class="my-12 md:my-24">
                <AnimatedHeading class="text-noir mb-8" title="Les différents cours" />
                <div class="text-noir grid grid-cols-1 mt-0 md:mt-10 xl:grid-cols-3 gap-16 mx-10 sm:mx-32 lg:mx-56 xl:mx-10">
                    <div class="relative">
                        <img src="@/assets/images/bitmap/card-crea-1.png" alt="fond de la carte">
                        <div class="absolute bottom-8 md:bottom-10 w-4/5 left-1/2 -translate-x-1/2 rounded-2xl py-4 md:py-6 text-center bg-[#FFF6F6]">
                            <p>Web Design</p>
                        </div>
                    </div>
                    <div class="relative">
                        <img src="@/assets/images/bitmap/card-crea-2.png" alt="fond de la carte">
                        <div class="absolute bottom-8 md:bottom-10 w-4/5 left-1/2 -translate-x-1/2 rounded-2xl py-4 md:py-6 text-center bg-[#FFF6F6]">
                            <p>Motion Design</p>
                        </div>
                    </div>
                    <div class="relative">
                        <img src="@/assets/images/bitmap/card-crea-3.png" alt="fond de la carte">
                        <div class="absolute bottom-8 md:bottom-10 w-4/5 left-1/2 -translate-x-1/2 rounded-2xl py-4 md:py-6 text-center bg-[#FFF6F6]">
                            <p>Branding</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-12 md:mb-24">
                <div class="">
                    <AnimatedHeading class="text-noir mb-8" title="Les projets ambitieux de nos étudiants" />
                    <p class="text-noir">
                        Voici des exemples de projet réalisés par nos étudiant en création numérique :
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-[150px] xl:gap-[250px] mx-0 lg:mx-20 xl:mx-36 mt-5">
                    <div v-for="projet in projets" :key="projet._id" class="">
                        <div class="rounded-3xl overflow-hidden flex flex-col relative h-[500px]">
                            <img v-if="projet.image" :src="urlFor(projet.image)!.url()" :alt="projet.title" class="object-cover w-full h-full">
                            <div class="absolute bottom-0 flex flex-col justify-end ml-5 mb-5 md:ml-6 md:mb-6">
                                <p class="text-white font-poppins text-2xl md:text-3xl font-semibold">{{ projet.name }}</p>
                                <div v-if="projet.etiquetteMax2 && projet.etiquetteMax2.length" class="flex flex-wrap space-x-4 mt-2 md:mt-3">
                                    <p v-for="etiquette in projet.etiquetteMax2" :key="etiquette" class="tag font-manrope font-medium text-xs md:text-base rounded-3xl text-white py-2 md:py-3 px-4 md:px-6 border-solid border-[1px] border-white">{{ etiquette }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    </main>
</template>