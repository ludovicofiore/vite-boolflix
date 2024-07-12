<script>

export default {
    name: 'FilmCard',
    props: ['movieData'],

    data() {
        return {
            
            // struttura dati per immagini lingua
            langImg: [
                {
                    language: 'en',
                    image: '../src/assets/img/Flag-United-Kingdom.webp',
                },
                {
                    language: 'de',
                    image: '../src/assets/img/germanyflag__35169.jpg',
                },
                {
                    language: 'it',
                    image: '../src/assets/img/italy-flag.png',
                },
                {
                    language: 'ja',
                    image: '../src/assets/img/jp-flag.png',
                },
                {
                    language: 'fr',
                    image: '../src/assets/img/Flag_of_France.svg.webp',
                },
            ],

        }
    },

    computed: {
        // computed per immagine lingua
        matchedImage() {
            return this.langImg.find(imageFlag => imageFlag.language === this.movieData.original_language);
        },

        // computed per arrotondare voto
        roundVote() {
            return Math.ceil(this.movieData.vote_average / 2);
        }

    },


}


</script>

<template>
    <div class="card">

        <div class="poster-container">
            <img :src="'https://image.tmdb.org/t/p/w342' + movieData.poster_path" :alt="movieData.title">
        </div>

        <h3>{{ movieData.title }}</h3>

        <h5>{{ movieData.original_title }}</h5>

        <div class="lang-container">
            <img v-if="matchedImage" :src="matchedImage.image" :alt="matchedImage.language" />
            <p v-else>{{ movieData.original_language }}</p>
        </div>
        

        <p>{{ roundVote }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card {
    // debug
    width: 200px;
    background-color: aquamarine;
    border: 1px solid black;
    text-align: center;

    .poster-container {
        width: 100%;

        img {
            max-width: 100%;
        }
    }

    .lang-container {
        width: 100%;

        img {
            max-width: 30%;
        }
    }
}
</style>