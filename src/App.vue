<script>

// import axios
import axios from "axios";
// import store
import { store } from './store';

export default {
  name: 'App',
  components: {

  },


  data() {
    return {
      store,
    }
  },

}
</script>

<template>



</template>

<style lang="scss">
@use './style/general.scss' as *;
@use './style/partials/variables' as*;
</style>
