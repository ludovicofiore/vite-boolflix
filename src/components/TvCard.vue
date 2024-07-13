<script>

export default {
    name: 'TvCard',
    props: ['serieData'],

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

            // array per stelle voto
            stars: [
                1, 2, 3, 4, 5,
            ],
        }
    },

    computed: {
        // computed per immagine lingua
        matchedImage() {
            return this.langImg.find(imageFlag => imageFlag.language === this.serieData.original_language);
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
            <img :src="'https://image.tmdb.org/t/p/w342' + serieData.poster_path" :alt="serieData.title">
        </div>

        <div class="text-container">
            <h3>{{ serieData.name }}</h3>

            <h5>{{ serieData.original_name }}</h5>

            <div class="lang-container">
                <img v-if="matchedImage" :src="matchedImage.image" :alt="matchedImage.language" />
                <p v-else>{{ serieData.original_language }}</p>
            </div>

            <div class="star-vote">
                <i class="fa-star" v-for="(star, index) in stars" :key="index" :class="index < roundVote ? 'fa-solid' : 'fa-regular'"></i>
            </div>

        </div>
        
    </div>
</template>

<style lang="scss" scoped>

</style>