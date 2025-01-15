<script setup lang="ts">
import heroImg from '@/assets/images/bitmap/hero-candidater.png';
import candidaterImg from '@/assets/images/bitmap/candidater-section.png';

useSeoMeta({
    title: 'Candidater | MMI Montbéliard',
    description: 'Candidater au département MMI de Montbéliard, que ce soit via Parcoursup ou eCandidat : toutes les informations nécessaires pour soumettre votre dossier et rejoindre une formation innovante en multimédia et communication numérique.',
    ogImage: heroImg
});

</script>

<template>
    <main>
        <MyHero :image=heroImg alt="Étudiants de MMI" title="Candidater"/>

        <div class="margin"> 

            <SecondHeading title-black="Rejoignez le département " title-yellow="MMI Montbéliard" />

            <SimpleSection
                heading-title="Pourquoi choisir MMI Montbéliard ?"
                paragraph-text="Le département MMI Montbéliard offre une formation pluridisciplinaire qui permet de maîtriser la création de contenu multimédia, le design, le développement web, et la communication digitale, entre autres compétences. Vous évoluerez dans un environnement stimulant où vous participerez à des projets concrets et collaborerez avec des professionnels du secteur. Nos espaces de travail sont équipés des dernières technologies pour vous accompagner dans le développement de vos projets. De plus, vous aurez l’opportunité d’intégrer des entreprises partenaires lors de stages, enrichissant ainsi votre expérience et vos perspectives professionnelles."
                :image-src=candidaterImg
                image-alt="Étudiants de MMI"
            />

            <section id="ici" class="xl:grid xl:grid-cols-2">
                <div class="text-left">
                    <h2 class="text-noir border-l-[12px] border-jaune pl-5 mb-5 md:mb-12">
                        Inscriptions <br>ParcourSup
                    </h2>
                    <p class="hidden xl:inline text-noir">
                        Vous souhaitez nous rejoindre pour commencer votre formation ? <br>L'inscription se réalise via Parcoursup. <br>Mettez en avant vos compétences et vos motivations, et qui sait, <br>vous pourriez être sélectionné pour intégrer le programme MMI !
                    </p>
                    <p class="xl:hidden text-noir">
                        Vous souhaitez nous rejoindre pour commencer votre formation ? L'inscription se réalise via Parcoursup. Mettez en avant vos compétences et vos motivations, et qui sait, vous pourriez être sélectionné pour intégrer le programme MMI !
                    </p>
                    <ExternLink class="hidden mt-3 md:mt-11 md:block w-fit" href="https://www.parcoursup.gouv.fr/">
                        S'inscrire sur Parcoursup
                    </ExternLink>
                    <ExternLinkMini class="mt-3 md:mt-11 block md:hidden w-fit" href="https://www.parcoursup.gouv.fr/">
                        S'inscrire sur Parcoursup
                    </ExternLinkMini>
                </div>
                <div class="text-left xl:text-right mt-12 md:mt-24 xl:mt-0">
                    <h2 class="text-noir border-l-[12px] xl:border-0 xl:border-r-[12px] border-gris pl-5 xl:p-0 xl:pr-5 mb-5 md:mb-12">
                        Inscriptions <br>eCandidat
                    </h2>
                    <p class="hidden xl:inline text-noir">
                        Vous envisagez de vous réorienter vers notre formation ? <br>Aucun souci, l'inscription se fait via e-candidat. <br>Valorisez vos expériences et vos aspirations, et vous aurez la <br>chance de rejoindre le programme MMI !
                    </p>
                    <p class="xl:hidden text-noir">
                        Vous envisagez de vous réorienter vers notre formation ? Aucun souci, l'inscription se fait via e-candidat. Valorisez vos expériences et vos aspirations, et vous aurez la chance de rejoindre le programme MMI !
                    </p>
                    <ExternLink class="hidden mt-3 md:mt-11 md:block xl:place-self-end w-fit" href="https://admission.univ-fcomte.fr/11-ecandidat.php">
                        S’inscrire sur eCandidat
                    </ExternLink>
                    <ExternLinkMini class="mt-3 md:mt-11 block md:hidden xl:place-self-end w-fit" href="https://admission.univ-fcomte.fr/11-ecandidat.php">
                        S’inscrire sur eCandidat
                    </ExternLinkMini>
                </div>
            </section>
        </div>
    </main>
</template>