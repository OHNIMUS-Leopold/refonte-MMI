<script setup lang="ts">
import heroImg from '@/assets/images/bitmap/hero-international.png'
import stageImg from '@/assets/images/bitmap/partir-en-stage.png'
import offfImg from '@/assets/images/bitmap/conference-offf.png'
import vanierImg from '@/assets/images/bitmap/cgep-vanier.png'
</script>


<template>
    <main>
        <MyHero :image=heroImg alt="Étudiants de MMI au Canada" title="International"/>

        <div class="margin">
            <SecondHeading class="lg:w-3/5 xl:w-2/5 mx-auto" title-black="Partir à " title-yellow="l'étranger"/>

            <SimpleSection 
            heading-title="Partir en stage" 
            paragraph-text="Le département MMI vous propose l'opportunité d'explorer et de vous familiariser avec les métiers du numérique à travers des stages ou des périodes d'alternance à l'international. Cette expérience enrichissante et valorisante permet aux étudiants de développer leurs compétences linguistiques tout en perfectionnant leur maîtrise des aspects techniques." 
            :image-src=stageImg
            image-alt="Étudiant MMI en stage"    
            />

            <SimpleSection 
            heading-title="Festival OFFF" 
            paragraph-text="Notre département organise depuis plusieurs années un voyage à Barcelone, permettant à certains étudiants de prendre part au OFFF, un festival international consacré à l'art numérique. <br/><br/>En participant à des conférences animées par des personnalités du domaine numérique, les étudiants développent leur culture artistique tout en s'immergeant dans la diversité culturelle de la ville." 
            :image-src=offfImg
            image-alt="Conférence du festival OFFF"    
            />

            <SimpleSection 
            heading-title="Un semestre d'étude au cœur du Canada" 
            paragraph-text="Notre département est partenaire avec deux cégeps de renom au Canada, offrant à nos étudiants une immersion académique et culturelle enrichissante. Cette opportunité permet chaque année à quelques étudiants d'effectuer un semestre à Montréal ou à Matane, tout en renforçant leurs compétences professionnelles dans des domaines spécialisés." 
            :image-src=vanierImg
            image-alt="CGEP de Vanier"    
            />

            <section class="-mt-12 md:-mt-16 grid grid-cols-1 xl:grid-cols-5 xl:gap-14 mb-12 md:mb-24">
                <p class="text-noir mt-5 xl:m-0 col-span-3 xl:flex xl:flex-col xl:gap-4">
                    Le Cégep de Matane offre un parcours dans les techniques d’intégration multimédia, permettant aux étudiants de développer leurs compétences en création de contenu numérique et en intégration de solutions multimédia.
                </p>
                <p class="text-noir mt-5 xl:m-0 col-span-2 xl:flex xl:flex-col xl:gap-4">
                    À Montréal, le Cégep de Vanier propose une formation orientée sur le design et les travaux d’impression. Cette spécialisation permet aux étudiants de se familiariser avec les pratiques et techniques de l’industrie du design canadien.
                </p>
            </section>
        </div>
    </main>
</template>