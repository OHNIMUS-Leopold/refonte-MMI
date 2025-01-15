<script setup lang="ts">
useSeoMeta({
    title: 'Contact | MMI Montbéliard',
    description: 'Contactez le département MMI de Montbéliard pour toute information sur nos formations, parcours, événements ou pour échanger avec notre équipe. Trouvez ici les coordonnées et moments de rencontre, comme la Journée Portes Ouvertes.',
    
});
//ogImage: heroImg


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
        }

    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
    }
};

</script>


<template>
    <main>
        <div class="py-96 bg-yellow-100">
            <form @submit.prevent="submitForm">
                <div>
                    <label for="name">Nom :</label>
                    <input id="name" v-model="form.name" type="text" required >
                </div>
                <div>
                    <label for="email">Email :</label>
                    <input id="email" v-model="form.email" type="email" required >
                </div>
                <div>
                    <label for="message">Message :</label>
                    <textarea id="message" v-model="form.message" required/>
                </div>
                    <button type="submit">Envoyer</button>
            </form>
        </div>
    </main>
</template>