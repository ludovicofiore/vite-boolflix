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
        }
    },
}
</script>

<template>
    <!-- controllo per titolo prima di ricerca -->
    <h2 class="default-title" :class="store.filmQuery !== '' ? 'no-display' : ''">EFFETTUA UNA RICERCA</h2>
    <div :class="store.filmQuery === '' ? 'no-display' : ''">
        
        <section class="container">
            <h2>FILM</h2>
            <FilmCard v-for="singleMovie in store.filmArray" :key="singleMovie.id" :movieData="singleMovie" />

        </section>

        <section class="container">
            <h2>SERIE TV</h2>
            <TvCard v-for="singleSerie in store.tvArray" :key="singleSerie.id" :serieData="singleSerie" />
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