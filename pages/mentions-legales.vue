<script setup lang="ts">
import heroImg from '@/assets/images/bitmap/hero-mentions.png';
</script>


<template>
    <main>
        <MyHero :image=heroImg alt="Bâtiment MMI" title="Mentions légales"/>
        <section class="margin">
            <SecondHeading class="lg:w-3/5 xl:w-2/5 mx-auto" title-black="Mentions " title-yellow="légales" />
            <h3 class="text-noir uppercase">
                Département MMI de Montbéliard
            </h3>
            <p class="text-noir mt-1 mb-6 md:mt-3 md:mb-8">
                Adresse : 4 Place Lucien Tharradin, 25200 Montbéliard
                <br>Téléphone : 03 81 99 47 34
            </p>
            <h3 class="text-noir uppercase">
                Directeur de la Publication
            </h3>
            <p class="text-noir mt-1 mb-6 md:mt-3 md:mb-8">
                Monsieur Xavier Senente
            </p>
            <h3 class="text-noir uppercase">
                Hébergement du Site
            </h3>
            <p class="text-noir mt-1 mb-6 md:mt-3 md:mb-8">
                Infomaniak
            </p>
            <h3 class="text-noir uppercase">
                Propriété intellectuelle
            </h3>
            <p class="text-noir mt-1 mb-6 md:mt-3 md:mb-8">
                L’ensemble des contenus de ce site (textes, images, vidéos, logos, graphiques, etc.)
                est la propriété du Département MMI de Montbéliard ou de partenaires ayant cédé les
                droits d’utilisation.
                <br>
                Toute reproduction, distribution, modification ou utilisation sans autorisation écrite
                préalable est strictement interdite.
            </p>
            <h3 class="text-noir uppercase">
                Protection des Données Personnelles
            </h3>
            <p class="text-noir mt-1 mb-6 md:mt-3 md:mb-8">
                Ce site peut recueillir des données personnelles via des formulaires de contact ou
                d’inscription. Ces informations sont traitées conformément à notre politique de
                confidentialité, accessible [lien vers la politique de confidentialité].
            </p>
            <h3 class="text-noir uppercase">
                Cookies
            </h3>
            <p class="text-noir mt-1 mb-6 md:mt-3 md:mb-8">
                Des cookies sont utilisés sur ce site pour améliorer l’expérience utilisateur.
            </p>
            <h3 class="text-noir uppercase">
                Liens Hypertextes
            </h3>
            <p class="text-noir mt-1 mb-6 md:mt-3 md:mb-8">
                Ce site peut inclure des liens vers d’autres sites web. Le Département MMI de
                Montbéliard n’est pas responsable du contenu de ces sites externes.
            </p>
            <h3 class="text-noir uppercase">
                Responsabilité
            </h3>
            <p class="text-noir mt-1 mb-6 md:mt-3 md:mb-8">
                Le Département MMI de Montbéliard s’efforce de fournir des informations exactes et à
                jour sur ce site, mais ne garantit pas l’exactitude, l’exhaustivité, ou la pertinence de ces
                informations. Le Département décline toute responsabilité pour les erreurs ou omissions
                dans le contenu.
            </p>
            <h3 class="text-noir uppercase">
                Droit Applicable
            </h3>
            <p class="text-noir mt-1 mb-6 md:mt-3 md:mb-8">
                Ce site est protégé par les lois françaises et internationales relatives aux droits d’auteur
                et à la propriété intellectuelle. Tous les droits de reproduction sont réservés,
            </p>
        </section>
    </main>
</template>