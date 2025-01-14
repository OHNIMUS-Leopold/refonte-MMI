<script setup lang="ts">
import heroImg from '@/assets/images/bitmap/hero-confidentialite.png';
</script>


<template>
    <main>
        <MyHero :image=heroImg alt="Étudiants dans l'amphithéâtre" title="Confidentialité"/>
        <section class="margin">
            <SecondHeading title-black="Politique de " title-yellow="confidentialité" />
            <h3 class="text-noir uppercase">
                Collecte et utilisation des données
            </h3>
            <p class="text-noir mt-1 md:mt-3">
                Sur notre site, nous respectons votre vie privée. Les seules données personnelles collectées sont celles que vous fournissez volontairement via notre formulaire de contact. Ces informations peuvent inclure :
            </p>
            <ul class="text-noir list-disc ml-5">
                <li>
                    <p>Votre nom</p>
                </li>
                <li>
                    <p>Votre adresse e-mail</p>
                </li>
                <li>
                    <p>Tout autre renseignement que vous choisissez de partager dans le champ de message</p>
                </li>
            </ul>
            <p class="text-noir mb-6 md:mb-8">
                <br>Ces données sont collectées uniquement dans le but de répondre à vos demandes et de vous fournir les informations ou services demandés.
            </p>
            <h3 class="text-noir uppercase">
                Conservation des données
            </h3>
            <p class="text-noir mt-1 mb-6 md:mt-3 md:mb-8">
                Vos données sont conservées uniquement le temps nécessaire pour répondre à vos sollicitations ou pour toute durée légale requise. Une fois ce délai écoulé, elles sont supprimées de manière sécurisée.
            </p>
            <h3 class="text-noir uppercase">
                Partage des données
            </h3>
            <p class="text-noir mt-1 mb-6 md:mt-3 md:mb-8">
                Les informations collectées via le formulaire de contact ne sont ni vendues, ni louées, ni partagées avec des tiers.
            </p>
            <h3 class="text-noir uppercase">
                Sécurité des données
            </h3>
            <p class="text-noir mt-1 mb-6 md:mt-3 md:mb-8">
                Nous mettons en œuvre des mesures techniques et organisationnelles pour garantir la sécurité de vos données personnelles et éviter leur perte, utilisation abusive ou accès non autorisé.
            </p>
            <h3 class="text-noir uppercase">
                Vos droits
            </h3>
            <p class="text-noir mt-1 md:mt-3">
                Conformément aux lois en vigueur sur la protection des données, vous disposez des droits suivants :
            </p>
            <ul class="text-noir list-disc ml-5">
                <li>
                    <p>Accéder à vos données personnelles</p>
                </li>
                <li>
                    <p>Demander leur rectification ou suppression</p>
                </li>
                <li>
                    <p>Retirer votre consentement à tout moment</p>
                </li>
            </ul>
            <p class="text-noir mb-6 md:mb-8">
                <br>Pour exercer ces droits, vous pouvez nous contacter via l'adresse e-mail mentionnée sur la page contact.
            </p>
            <h3 class="text-noir uppercase">
                Modifications de cette politique
            </h3>
            <p class="text-noir mt-1 mb-6 md:mt-3 md:mb-8">
                Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
                <br>Date de dernière mise à jour : 14 Janvier 2025
            </p>
        </section>
    </main>
</template>