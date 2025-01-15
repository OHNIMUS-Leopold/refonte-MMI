<script setup lang="ts">
useSeoMeta({
    title: 'Erreur 404 | MMI Montbéliard',
    description: "Oups ! La page que vous recherchez n'existe pas. Retournez à l'accueil ou explorez notre site pour trouver les informations que vous cherchez.",
});


const showGame = ref(false);

const toggleGame = () => {
  showGame.value = !showGame.value;
};

type TrailSegment = { x: number; y: number };

const canvasWidth = 400;
const canvasHeight = 400;
const gs = 20; // grid size
const tc = 20; // tile count

const px = ref(10);
const py = ref(10);
const ax = ref(15);
const ay = ref(15);
const xv = ref(0);
const yv = ref(0);
const trail = ref<TrailSegment[]>([]);
const tail = ref(5);

let ctx: CanvasRenderingContext2D | null = null;
let interval: number | null = null;

const game = () => {
    if (!ctx) return;

    px.value += xv.value;
    py.value += yv.value;

    // Wrap-around logic
    if (px.value < 0) px.value = tc - 1;
    if (px.value > tc - 1) px.value = 0;
    if (py.value < 0) py.value = tc - 1;
    if (py.value > tc - 1) py.value = 0;

    // Clear canvas
    ctx.fillStyle = "#010101";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw snake
    ctx.fillStyle = "#FFD53E";
    for (let i = 0; i < trail.value.length; i++) {
        ctx.fillRect(
        trail.value[i].x * gs,
        trail.value[i].y * gs,
        gs - 2,
        gs - 2
        );
        if (trail.value[i].x === px.value && trail.value[i].y === py.value) {
        tail.value = 5; // Reset tail on collision
        }
    }

    // Update trail
    trail.value.push({ x: px.value, y: py.value });
    while (trail.value.length > tail.value) {
        trail.value.shift();
    }

    // Check for food collision
    if (ax.value === px.value && ay.value === py.value) {
        tail.value++;
        ax.value = Math.floor(Math.random() * tc);
        ay.value = Math.floor(Math.random() * tc);
    }

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(ax.value * gs, ay.value * gs, gs - 2, gs - 2);
};

const keyPush = (evt: KeyboardEvent) => {
    switch (evt.key) {
        case "ArrowLeft": // Left
        xv.value = -1;
        yv.value = 0;
        break;
        case "ArrowUp": // Up
        xv.value = 0;
        yv.value = -1;
        break;
        case "ArrowRight": // Right
        xv.value = 1;
        yv.value = 0;
        break;
        case "ArrowDown": // Down
        xv.value = 0;
        yv.value = 1;
        break;
    }
};

onMounted(() => {
    const canvas = document.getElementById("gc") as HTMLCanvasElement;
    ctx = canvas.getContext("2d");
    if (ctx) {
        document.addEventListener("keydown", keyPush);
        interval = window.setInterval(game, 1000 / 15);
    }
});

onUnmounted(() => {
    document.removeEventListener("keydown", keyPush);
    if (interval !== null) {
        clearInterval(interval);
    }
    document.body.style.overflow = '';
});

watch(showGame, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});


</script>



<template>
    <div>
        <MyHeader />
        <main>
            <section class="hidden xl:flex flex-col text-center my-56" :class="{ 'py-96': showGame }">
                <div :class="{ 'block': !showGame, 'hidden': showGame }">
                    <button @click="toggleGame" class="contents">
                        <p class="font-manrope text-jaune font-medium text-[250px] hover:text-noir duration-500" style="text-shadow: 0px 18px 4px rgba(0, 0, 0, 0.25);">404</p>
                    </button>
                    <h1 class="text-noir font-manrope font-bold text-7xl mt-32 mb-7 relative w-fit mx-auto">
                        Oups ! Page non trouvée
                        <div class="absolute -top-6 -right-5 md:-right-8">
                            <img class="" src="@/assets/images/svg/3lines-y.svg" alt="">
                        </div>
                    </h1>
                    <p class="text-noir mx-20">
                        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.<br>
                        Vous pouvez retourner à la <RouterLink to="/" class="text-jaune duration-500 hover:text-noir">page d'accueil</RouterLink> ou utiliser le menu pour naviguer sur notre site. Si vous avez besoin d'aide, n'hésitez pas à nous contacter.<br>
                        Merci de votre compréhension !
                    </p>
                </div>
            </section>

            <section class="xl:hidden flex flex-col text-center mt-56 mb-36">
                <div>
                    <p class="font-manrope text-jaune font-medium text-[150px] md:text-[250px]" style="text-shadow: 0px 18px 4px rgba(0, 0, 0, 0.25);">404</p>
                    <h1 class="text-noir font-manrope font-bold text-3xl md:text-7xl mt-32 mb-7 relative w-fit mx-auto">
                        Oups ! Page non trouvée
                        <div class="absolute -top-6 -right-5 md:-right-8">
                            <img class="" src="@/assets/images/svg/3lines-y.svg" alt="">
                        </div>
                    </h1>
                    <p class="text-noir mx-5 md:mx-20">
                        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.<br>
                        Vous pouvez retourner à la <RouterLink to="/" class="text-jaune duration-500 hover:text-noir">page d'accueil</RouterLink> ou utiliser le menu pour naviguer sur notre site. Si vous avez besoin d'aide, n'hésitez pas à nous contacter.<br>
                        Merci de votre compréhension !
                    </p>
                    <div class="absolute top-0 bg-jaune w-full h-20"></div>
                </div>
            </section>

            <section class="absolute top-40 left-1/2 -translate-x-1/2" :class="{ 'block': showGame, 'hidden': !showGame }">
                <canvas id="gc" :width="canvasWidth" :height="canvasHeight"></canvas>
                <button @click="toggleGame" class="text-4xl absolute left-1/2 mt-5 -translate-x-1/2 border-2 border-solid border-noir hover:border-jaune duration-500 text-noir hover:text-jaune rounded-full p-10">
                    <div class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 pb-2">🗙</div>
                </button>
            </section>
        </main>
        <MyFooter />
    </div>
</template>

<style scoped>

</style>