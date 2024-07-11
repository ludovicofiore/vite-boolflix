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

}
</script>

<template>
  <AppHeader />

  <main>
    <FilmContainer />
  </main>

</template>

<style lang="scss">
@use './style/general.scss' as *;
@use './style/partials/variables' as*;
</style>
