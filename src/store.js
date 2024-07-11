
import { reactive } from "vue";

export const store = reactive({

    // api per film
    filmArray: [],
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=e9b0d0fd3b1205382e395e5b00212d57&language=it_IT',

    // api per serie tv
    tvArray: [],
    apiURLTv: 'https://api.themoviedb.org/3/search/tv?api_key=e9b0d0fd3b1205382e395e5b00212d57&language=it_IT',

    // query da aggiungere ad api
    filmQuery: '',
});