
import { reactive } from "vue";

export const store = reactive({

    filmArray: [],
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=e9b0d0fd3b1205382e395e5b00212d57',

    // query da aggiungere ad api
    filmQuery: '',
});