<template>
    <div class="slider my-14 md:my-24" reverse="true" style="
        --width: 300px;
        --height: 60px;
        --quantity: 12; /* 6 textes + 6 vecteurs */
        --gap: 0px; /* Ajustez cet espacement pour centrer */
    ">
        <div class="list">
            <div class="item" style="--position: 1">
                <p class="text">Intégration</p>
            </div>
            <div class="item" style="--position: 2">
                <img class="vector" src="../assets/images/svg/sliding-vector.svg" alt="Vector">
            </div>
            <div class="item" style="--position: 3">
                <p class="text">Webdesign</p>
            </div>
            <div class="item" style="--position: 4">
                <img class="vector" src="../assets/images/svg/sliding-vector.svg" alt="Vector">
            </div>
            <div class="item" style="--position: 5">
                <p class="text">Développement</p>
            </div>
            <div class="item" style="--position: 6">
                <img class="vector" src="../assets/images/svg/sliding-vector.svg" alt="Vector">
            </div>
            <div class="item" style="--position: 7">
                <p class="text">Communication</p>
            </div>
            <div class="item" style="--position: 8">
                <img class="vector" src="../assets/images/svg/sliding-vector.svg" alt="Vector">
            </div>
            <div class="item" style="--position: 9">
                <p class="text">Motion Design</p>
            </div>
            <div class="item" style="--position: 10">
                <img class="vector" src="../assets/images/svg/sliding-vector.svg" alt="Vector">
            </div>
            <div class="item" style="--position: 11">
                <p class="text">UI / UX Design</p>
            </div>
            <div class="item" style="--position: 12">
                <img class="vector" src="../assets/images/svg/sliding-vector.svg" alt="Vector">
            </div>
        </div>
    </div>
</template>



<style scoped>
.slider {
    width: 100%;
    height: var(--height);
    overflow: hidden;
    position: relative;
    mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
}

.slider .list {
    display: flex;
    width: calc((var(--width) + var(--gap)) * var(--quantity));
    position: relative;
}

.slider .list .item {
    flex: 0 0 auto;
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 16s linear infinite;
    animation-delay: calc((16s / var(--quantity)) * (var(--position) - 1))!important;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slider[reverse="true"] .item {
    animation: reversePlay 16s linear infinite;
}

.text {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 300;
    font-size: 2.5rem;
    color: #000;
}

.vector {
    display: block;
    height: var(--height);
    width: auto; /* Conserve les proportions */
}

/* Animation pour le déroulement normal */
@keyframes autoRun {
    from {
        left: 100%;
    }
    to {
        left: calc((var(--width) + var(--gap)) * -1);
    }
}

/* Animation pour le déroulement inversé */
@keyframes reversePlay {
    from {
        left: calc((var(--width) + var(--gap)) * -1);
    }
    to {
        left: 100%;
    }
}

.slider:hover .item {
    animation-play-state: paused!important;
    filter: grayscale(1);
}

.slider .item:hover {
    filter: grayscale(0);
}
</style>
