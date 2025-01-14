import { defineEventHandler, readBody } from 'h3';
import { createClient } from '@sanity/client';
import { useRuntimeConfig } from '#imports';

export default defineEventHandler(async (event) => {
  console.log('Requête reçue dans /api/contact');  // Log pour vérifier si la requête atteint le serveur

  const body = await readBody(event);

  // Validation des champs
  if (!body.name || !body.email || !body.message) {
    console.log('Champs manquants dans la requête :', body); // Log pour vérifier les données reçues
    return { status: 400, message: 'Tous les champs sont requis.' };
  }

  try {
    // Récupération de la configuration Sanity
    const config = useRuntimeConfig().sanity;
    console.log('Configuration Sanity récupérée:', config);

    // Initialisation du client Sanity
    const client = createClient({
      projectId: "e3rbrik8",
      dataset: "production",
      apiVersion: '2023-01-01',
      token: process.env.SANITY_TOKEN,
      useCdn: false,
    });

    const doc = await client.create({
      _type: 'contactMessage',
      name: body.name,
      email: body.email,
      message: body.message,
      date: new Date().toISOString(),
    });

    console.log('Document créé dans Sanity:', doc);  // Log pour vérifier la création du document

    return { status: 200, message: 'Message envoyé avec succès.', doc };
  } catch (error) {
    console.error('Erreur lors de la création du document Sanity:', error);  // Affichage détaillé de l'erreur
    return { status: 500, message: 'Erreur lors de l\'envoi du message.', error: JSON.stringify(error, null, 2) }; // Retour détaillé dans la réponse
  }
});
