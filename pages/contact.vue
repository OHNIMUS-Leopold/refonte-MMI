<script setup lang="ts">
import heroImg from '@/assets/images/bitmap/hero-contact.png';

useSeoMeta({
    title: 'Contact | MMI Montbéliard',
    description: 'Contactez le département MMI de Montbéliard pour toute information sur nos formations, parcours, événements ou pour échanger avec notre équipe. Trouvez ici les coordonnées et moments de rencontre, comme la Journée Portes Ouvertes.',
    ogImage: heroImg
});



const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = async () => {
    if (!form.value.name || !form.value.email || !form.value.message) {
        console.log('Tous les champs sont requis.');
        return;
    }

    try {
        const res = await $fetch('/api/contact', {
            method: 'POST',
            body: form.value,
        });

        console.log('Réponse de l\'API:', res);

        if (res.status !== 200) {
            console.log('Erreur:', res.message);

        } else {
            console.log(res.message);
            form.value = { name: '', email: '', message: '' };
            alert('Votre message a bien été envoyé !');
        }

    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
    }
};

</script>


<template>
    <main>

        <MyHero :image=heroImg alt="Parents à la JPO" title="Nous rencontrer"/>

        <div class="margin bg-jaune py-8 md:py-20 rounded-xl" style="margin-right: 16px; margin-left: 16px; margin-top: 16px;">
            
            <div class="text-center">
                <h2 class="mb-1 md:mb-5 relative inline-block">
                    <span class="text-noir">
                        Rencontrons nous pour discuter plus en détails 
                    </span>
                    <span class="text-white">
                        de la formation
                    </span>
                    <div class="absolute -top-6 right-5">
                        <img class="" src="@/assets/images/svg/3lines-b.svg" alt="">
                    </div>
                </h2>
            </div>
            
            <img class="hidden md:block mx-auto " src="@/assets/images/svg/underline-n.svg" alt="">
            <img class="md:hidden mx-auto " src="@/assets/images/svg/underline-n-mini.svg" alt="">
            
        </div>


        <div class="margin" style="margin-bottom: 0;"> 

            <section class="grid grid-cols-1 xl:grid-cols-5 xl:gap-14">
                <div class="col-span-3 xl:flex xl:flex-col xl:gap-4">
                    <AnimatedHeading class="text-noir mb-8" title="Le département" />
                    <p class="text-noir my-5 xl:m-0">
                        Chaque année, le département organise une journée portes ouvertes pour offrir au public une immersion complète dans l’univers du BUT MMI. Cet événement constitue une occasion unique de visiter les installations, d’échanger avec les étudiants et les enseignants, et de mieux comprendre le contenu et les spécificités du programme.
                        <br>
                        Pour les personnes souhaitant approfondir leurs connaissances ou obtenir des informations complémentaires, l’équipe pédagogique reste disponible tout au long de l’année. Elle répond aux questions, accompagne les futurs étudiants dans leurs démarches et les guide dans la construction de leur projet d’études.    
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

        <div class="pt-32 md:pt-36 relative -z-10">
            <img class="object-cover h-[150px] md:h-auto" src="@/assets/images/bitmap/bande-contact.png" alt="Étudiants qui travaillent">
            <p class="absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 text-white font-semibold font-poppins text-7xl">Contact</p>
        </div>

        <div class="margin">
            <AnimatedHeading class="text-noir mb-8" title="Contactez-nous" />

            <section class="grid grid-cols-1 lg:grid-cols-2">
                <div class="contents">
                    <img src="../assets/images/bitmap/form-image.png" alt="Formulaire de contact" class="hidden w-3/5 m-auto lg:block">
                </div>
                <div class="relative flex font-manrope font-medium text-base lg:text-lg ">
                    <img class="hidden lg:block absolute top-12" src="@/assets/images/svg/arrow-left.svg" alt="">
                    <img class="hidden lg:block absolute top-80" src="@/assets/images/svg/arrow-left.svg" alt="">
                    <form class="w-full mx-0 lg:mx-14" @submit.prevent="submitForm">
                        <div class="grid grid-cols-1">
                            <label class="mb-1" for="name">Nom Prénom</label>
                            <input id="name" v-model="form.name" class="rounded-xl py-2 border-2 border-noir pl-4 mb-6 lg:mb-9" type="text" required >
                        </div>
                        <div class="grid grid-cols-1">
                            <label class="mb-1" for="email">Email</label>
                            <input id="email" v-model="form.email" class="rounded-xl py-2 border-2 border-noir pl-4 mb-6 lg:mb-9" type="email" required >
                        </div>
                        <div class="grid grid-cols-1">
                            <label class="mb-1" for="message">Message</label>
                            <textarea id="message" v-model="form.message" rows="4" class="rounded-xl py-2 border-2 border-noir pl-4 mb-9 lg:mb-16" required/>
                        </div>
                        <div class="grid grid-cols-1">
                            <button class="bg-jaune text-white font-poppins font-bold text-xl lg:text-3xl py-2 rounded-xl hover:text-jaune hover:bg-white border-[2px] border-solid border-jaune duration-500" type="submit">Envoyer</button>
                        </div>
                    </form>
                    <img class="hidden lg:block absolute right-0 top-44" src="@/assets/images/svg/arrow-right.svg" alt="">
                </div>
            </section>
        </div>
    </main>
</template>