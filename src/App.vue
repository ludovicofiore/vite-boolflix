<script>

// import axios
import axios from "axios";
// import store
import { store } from './store';

// import componenti
import AppHeader from './components/AppHeader.vue';
import FilmContainer from './components/FilmContainer.vue';

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

    handleSearch() {
      this.getMovies();
      this.getSeries();
    },


    // metodo per film
    getMovies() {
      // variabile per cambio api
      let endPoint = store.apiURL;

      // condizione per ricerca
      if (store.filmQuery !== '') {
        endPoint += `&query=${store.filmQuery}`
      }

      axios.get(endPoint).then(res => {
        // console.log(res.data.results);
        // riempio array con dati dell'api
        store.filmArray = res.data.results;
        // console.log(store.filmArray);

      })
    },


    // metodo per serie tv
    getSeries() {
      // variabile per cambio api
      let endPoint = store.apiURLTv;

      // condizione per ricerca
      if (store.filmQuery !== '') {
        endPoint += `&query=${store.filmQuery}`
      }

      axios.get(endPoint).then(result => {
        console.log(result.data.results);
        // riempio array con dati dell'api
        store.tvArray = result.data.results;
        console.log(store.tvArray);

      })
    },
  },

  // life cicle hook
  created() {
    this.getMovies();
    this.getSeries();

  }
}
</script>

<template>
  <AppHeader @search="handleSearch" />

  <main>
    <FilmContainer />
  </main>

</template>

<style lang="scss">
@use './style/general.scss' as *;
@use './style/partials/variables' as*;
</style>
