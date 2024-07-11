<script>
import FilmCard from './FilmCard.vue'

// import store
import { store } from '../store';

export default {
    name: 'FilmContainer',
    components: {
        FilmCard,
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
</template>

<style lang="scss" scoped>
section {
    display: flex;
    flex-wrap: wrap;
}
</style>