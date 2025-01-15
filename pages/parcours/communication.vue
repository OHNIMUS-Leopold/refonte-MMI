<script setup lang="ts">
import type { SanityDocument } from '@sanity/client';
import heroImg from '@/assets/images/bitmap/hero-comm.png'
import devSection from '@/assets/images/bitmap/section-comm.png'

useSeoMeta({
    title: 'Parcours stratégie de communication numérique | MMI Montbéliard',
    description: "Découvrez le parcours Stratégie de Communication Numérique du département MMI de Montbéliard : formez-vous à concevoir, piloter et optimiser des campagnes digitales innovantes.",
    ogImage: heroImg
});

const PROJETS_QUERY = groq`*[_type == "projet" && domaine == "comm"] | order(date desc)[0...2] {
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
        <MyHero :image=heroImg alt="Étudiant en train de faire de la stratégie de communication" title="stratégie de communication"/>

        <div class="margin" style="position: relative;">
            <SimpleSection
                heading-title="Le parcours stratégie de communication numérique qu’est ce que c’est ?"
                paragraph-text="Le parcours 'Stratégie de communication numérique' en MMI est une formation dédiée à l'apprentissage et à la maîtrise des techniques et outils indispensables pour concevoir et gérer des campagnes de communication efficaces dans l'univers digital.<br><br>Il explore des aspects essentiels tels que la planification stratégique, la création de contenu engageant, l'analyse des données et l'utilisation des médias numériques pour atteindre des objectifs marketing et de communication.<br><br>Les étudiants développent des compétences variées leur permettant de concevoir des stratégies innovantes, de s’adapter aux tendances du marché et de répondre aux besoins des entreprises souhaitant se démarquer dans un monde de plus en plus connecté."
                :image-src="devSection"
                image-alt="Photo d'étudiants en train de travailler sur des projets de communication"
                style="margin-bottom: 20px;"
                />    

            <section class="my-12 md:my-24">
                <AnimatedHeading class="text-noir mb-8" title="Les différents cours" />
                <div class="text-noir grid grid-cols-1 mt-0 md:mt-10 xl:grid-cols-3 gap-16 mx-10 sm:mx-32 lg:mx-56 xl:mx-10">
                    <div class="relative">
                        <img src="@/assets/images/bitmap/card-comm-1.png" alt="fond de la carte">
                        <div class="absolute bottom-8 md:bottom-10 w-4/5 left-1/2 -translate-x-1/2 rounded-2xl py-4 md:py-6 text-center bg-[#FFF6F6]">
                            <p>UX Design</p>
                        </div>
                    </div>
                    <div class="relative">
                        <img src="@/assets/images/bitmap/card-comm-2.png" alt="fond de la carte">
                        <div class="absolute bottom-8 md:bottom-10 w-4/5 left-1/2 -translate-x-1/2 rounded-2xl py-4 md:py-6 text-center bg-[#FFF6F6]">
                            <p>Marketing</p>
                        </div>
                    </div>
                    <div class="relative">
                        <img src="@/assets/images/bitmap/card-comm-3.png" alt="fond de la carte">
                        <div class="absolute bottom-8 md:bottom-10 w-4/5 left-1/2 -translate-x-1/2 rounded-2xl py-4 md:py-6 text-center bg-[#FFF6F6]">
                            <p>Communication</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-12 md:mb-24">
                <div class="">
                    <AnimatedHeading class="text-noir mb-8" title="Les projets ambitieux de nos étudiants" />
                    <p class="text-noir">
                        Voici des exemples de projet réalisés par nos étudiant en stratégie de communication numérique :
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