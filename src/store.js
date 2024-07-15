
import { reactive } from "vue";

export const store = reactive({

    // api per film
    filmArray: [],
    apiURL: 'https://api.themoviedb.org/3/search/movie?language=it-IT&api_key=e9b0d0fd3b1205382e395e5b00212d57',

    // api per serie tv
    tvArray: [],
    apiURLTv: 'https://api.themoviedb.org/3/search/tv?language=it-IT&api_key=e9b0d0fd3b1205382e395e5b00212d57',

    // query da aggiungere ad api
    filmQuery: '',
});