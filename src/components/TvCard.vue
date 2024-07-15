<script>

export default {
    name: 'TvCard',
    props: {
        serieData: Object,
        langArray: Array,
        vote: Array
    },

    computed: {
        // computed per immagine lingua
        matchedImage() {
            return this.langArray.find(imageFlag => imageFlag.language === this.serieData.original_language);
        },

        // computed per arrotondare voto
        roundVote() {
            return Math.ceil(this.serieData.vote_average / 2);
        }
    },
}
</script>

<template>
    <div class="card">

        <div class="poster-container">
            <img :src="'https://image.tmdb.org/t/p/w342' + serieData.poster_path" :alt="serieData.name">
        </div>

        <div class="text-container">
            <h3>{{ serieData.name }}</h3>

            <h5>{{ serieData.original_name }}</h5>

            <div class="lang-container">
                <img v-if="matchedImage" :src="matchedImage.image" :alt="matchedImage.language" />
                <p v-else>{{ serieData.original_language }}</p>
            </div>

            <div class="star-vote">
                <i class="fa-star" v-for="(star, index) in this.vote" :key="index" :class="index < roundVote ? 'fa-solid' : 'fa-regular'"></i>
            </div>

            <div class="plot">
                <p>{{ serieData.overview }}</p>
            </div>

        </div>
        
    </div>
</template>

<style lang="scss" scoped>

</style>