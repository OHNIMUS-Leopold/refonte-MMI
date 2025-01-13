<template>
    <div>
        <ul id="cards">
            <li class="card" id="card1">
                <div class="card-body">
                    <div class="card-body-content text-noir">
                        <h3 class="card-body-content-title">Développement Web et <br>Dispositifs Interactifs</h3>
                        <p class="card-body-content-desc">Le parcours développement web et dispositifs interactifs en BUT MMI forme aux compétences techniques en programmation, création de sites web, applications mobiles, bases de données, et technologies interactives. <br>
                            Ce parcours vous dotera des compétences techniques nécessaires pour concevoir des sites internet complets. Vous explorerez différents langages de programmation, notamment HTML, JavaScript, CSS, et Vue.js, afin de réaliser des sites fonctionnels et modernes.</p>
                        <DiscoverButton to="/parcours/developpement" />
                    </div>
                    <div class="bg-[#D9D9D9] h-60 mt-5"></div>
                </div>
            </li>
            <li class="card" id="card2">
                <div class="card-body">
                    <div class="card-body-content text-noir">
                        <h3 class="card-body-content-title">Création Numérique</h3>
                        <p class="card-body-content-desc">Le parcours création numérique en BUT MMI développe la créativité en conception numérique, incluant interfaces, supports de communication, montage vidéo, motion design et 3D. <br>
                            Ce parcours vous plongera dans la création de supports visuels variés, allant des maquettes de sites web aux affiches et vidéos. Vous apprendrez à maîtriser des logiciels tels qu’After Effects, Photoshop et Illustrator pour donner vie à vos projets visuels.</p>
                        <DiscoverButton to="/parcours/creation" />
                    </div>
                    <div class="bg-[#D9D9D9] h-60 mt-5"></div>
                </div>
            </li>
            <li class="card" id="card3">
                <div class="card-body">
                    <div class="card-body-content text-noir">
                        <h3 class="card-body-content-title">Stratégie de Communication <br>Numérique et Design d'Expérience</h3>
                        <p class="card-body-content-desc">Le parcours stratégie de communication numérique et design d'expérience en BUT MMI forme à la stratégie de communication, incluant création de contenu, médias sociaux, relations publiques, et marketing digital. <br>
                            Ce parcours vous enseignera les stratégies efficaces pour transmettre des messages percutants. Vous découvrirez comment optimiser le référencement d’un site web, interpréter des données analytiques, et mettre en place des stratégies pour captiver une audience.
                        </p>
                        <DiscoverButton to="/parcours/communication" />
                    </div>
                    <div class="bg-[#D9D9D9] h-60 mt-5"></div>
                </div>
            </li>
        </ul>
    </div>
</template>



<style scoped>



#cards {
	list-style: none;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(3, 87vh);
	gap: 4vw;
	padding-bottom: calc(3 * 1.5em);
}

#card1 {
	--index: 1;
}
#card2 {
	--index: 2;
}
#card3 {
	--index: 3;
}

.card {
	position: sticky;
	top: 0;
	padding-top: calc((var(--index) ) * 1.5em);
}

.card-body {
    background-color: white;
	box-sizing: border-box;
    border: solid 2px rgba(169, 169, 169, 0.6);
    border-left: 0px;
    border-right: 0px;
	padding: 56px 32px;

	box-shadow: 0 0 30px 0 rgba(0,0,0,0.3);

    height: 87vh;
	transition: all 0.5s;
    display: flex;
    flex-direction: column;


}

.card-body-content-desc {
    margin: 20px 0px;
}

@media (min-width: 768px) {
    .card-body-content-desc {
        margin: 32px 0px;
    }
}

</style>