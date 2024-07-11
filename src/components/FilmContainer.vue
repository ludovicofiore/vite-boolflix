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
    <section class="container">
        <FilmCard v-for="singleMovie in store.filmArray" :key="singleMovie.id" :movieData="singleMovie" />

    </section>

    <section class="container">

        <TvCard v-for="singleSerie in store.tvArray" :key="singleSerie.id" :serieData="singleSerie" />
    </section>
</template>

<style lang="scss" scoped>
section {
    display: flex;
    flex-wrap: wrap;
}
</style>