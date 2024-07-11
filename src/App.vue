<script>

// import axios
import axios from "axios";
// import store
import { store } from './store';

// import componenti
import AppHeader from './components/AppHeader.vue';
import FilmContainer from './components/FilmContainer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    FilmContainer,

  },


  data() {
    return {
      store,
    }
  },

  // metodo per gestione api
  methods: {
    getMovies() {
      // variabile per cambio api
      let endPoint = store.apiURL;

      // condizione per ricerca
      if (store.filmQuery !== '') {
        endPoint += `&query=${store.filmQuery}`
      }

      axios.get(endPoint).then(res => {
        console.log(res.data.results);
        // riempio array con dati dell'api
        store.filmArray = res.data.results;
        console.log(store.filmArray);

      })
    },
  },

  // life cicle hook
  created() {
    this.getMovies();

  }
}
</script>

<template>
  <AppHeader @search="getMovies" />

  <main>
    <FilmContainer />
  </main>

</template>

<style lang="scss">
@use './style/general.scss' as *;
@use './style/partials/variables' as*;
</style>
