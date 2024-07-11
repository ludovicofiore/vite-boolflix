<script>
// import store
import { store } from '../store';

export default {
    name: 'AppHeader',

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <header>
        <input type="text" placeholder="cerca un titolo" v-model="store.filmQuery">
        <button @click="$emit('search')">Cerca</button>
    </header>

</template>

<style lang="scss" scoped>
header {
    background-color: black;
    height: 150px;
    text-align: center;
    padding: 70px 0;
}
</style>