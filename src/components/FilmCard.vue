<script>

export default {
    name: 'FilmCard',
    props: {
        movieData: Object,
        langArray: Array,
        vote: Array
    },


    computed: {
        // computed per immagine lingua
        matchedImage() {
            return this.langArray.find(imageFlag => imageFlag.language === this.movieData.original_language);
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

        <div class="text-container">
            <h3>{{ movieData.title }}</h3>

            <h5>{{ movieData.original_title }}</h5>

            <div class="lang-container">
                <img v-if="matchedImage" :src="matchedImage.image" :alt="matchedImage.language" />
                <p v-else>{{ movieData.original_language }}</p>
            </div>

            <div class="star-vote">
                <i class="fa-star" v-for="(star, index) in this.vote" :key="index" :class="index < roundVote ? 'fa-solid' : 'fa-regular'"></i>
            </div>

            <div class="plot">
                <p>{{ movieData.overview }}</p>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>

</style>