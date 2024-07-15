<script>
import FilmCard from './FilmCard.vue';
import TvCard from './TvCard.vue';

// import store
import { store } from '../store';

export default {
    name: 'FilmContainer',
    components: {
        FilmCard,
        TvCard,
    },

    data() {
        return {
            store,

            // struttura dati per immagini lingua
            langImg: [
                {
                    language: 'en',
                    image: '../src/assets/img/Flag-United-Kingdom.webp',
                },
                {
                    language: 'de',
                    image: '../src/assets/img/germanyflag__35169.jpg',
                },
                {
                    language: 'it',
                    image: '../src/assets/img/italy-flag.png',
                },
                {
                    language: 'ja',
                    image: '../src/assets/img/jp-flag.png',
                },
                {
                    language: 'fr',
                    image: '../src/assets/img/Flag_of_France.svg.webp',
                },
            ],

            // array per stelle voto
            stars: [
                1, 2, 3, 4, 5,
            ],
        }
    },
}
</script>

<template>
    <!-- controllo per titolo prima di ricerca -->
    <h2 class="default-title" :class="store.filmArray && store.tvArray == '' ? '' : 'no-display'">EFFETTUA UNA RICERCA</h2>
    <div :class="store.filmArray && store.tvArray == '' ? 'no-display' : ''">
        
        <section class="container">
            <h2>FILM</h2>
            <FilmCard v-for="singleMovie in store.filmArray" :key="singleMovie.id" :movieData="singleMovie" :langArray="langImg" :vote="stars" />

        </section>

        <section class="container">
            <h2>SERIE TV</h2>
            <TvCard v-for="singleSerie in store.tvArray" :key="singleSerie.id" :serieData="singleSerie" :langArray="langImg" :vote="stars" />
        </section>

    </div>
    
</template>

<style lang="scss" scoped>
.default-title{
    color: white;
    text-align: center;
    padding: 50px;
}

.no-display {
    display: none;
}

</style>