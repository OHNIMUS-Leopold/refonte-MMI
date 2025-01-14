<script setup lang="ts">
import type { SanityDocument } from '@sanity/client';

const ACTUALITES_QUERY = groq`*[_type == "actualite"] | order(publishedAt desc)[0...2] {
    _id,
    title,
    image,
    description,
    publishedAt
}`;

const { data: actualite } = await useSanityQuery<SanityDocument[]>(ACTUALITES_QUERY);

const {urlFor} = useSanityImage()

</script>



<template>
    <main>
        <div class="py-20 grid grid-cols-2">
            <div v-for="actu in actualite" :key="actu._id" class="">
                <div class="">
                    <img v-if="actu.image" :src="urlFor(actu.image)!.url()" :alt="actu.title" class="">
                    <p class="">{{ actu.title }}</p>
                    <p class="">{{ actu.description }}</p>
                </div>
            </div>
        </div>
    </main>
</template>