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
        <div class="logo-container">
            <h1>BOOLFLIX</h1>
        </div>

        <div class="input-container">
            <input type="text" placeholder="cerca un titolo" v-model="store.filmQuery" @keyup.enter="$emit('search')">
            <button @click="$emit('search')">Cerca</button>
        </div>
        
    </header>

</template>

<style lang="scss" scoped>
header {
    background-color: black;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;

    .logo-container {
        color: red;
    }

    .input-container {
        input {
            display: inline-block;
            width: 250px;
            padding: 10px;
            border: 0;
        }

        button {
            padding: 10px;
            background-color: red;
            border: 0;
            color: white;
            font-weight: bold;
            cursor: pointer;
        }
    }
    
}
</style>