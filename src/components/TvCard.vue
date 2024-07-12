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
        }
    },

    computed: {
        // computed per immagine lingua
        matchedImage() {
            return this.langImg.find(imageFlag => imageFlag.language === this.serieData.original_language);
        }
    },
}
</script>

<template>
    <div class="card">
        <h3>{{ serieData.name }}</h3>

        <h5>{{ serieData.original_name }}</h5>

        <div class="img-container">
            <img v-if="matchedImage" :src="matchedImage.image" :alt="matchedImage.language" />
            <p v-else>{{ serieData.original_language }}</p>
        </div>

        <p>{{ serieData.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card {
    // debug
    width: 200px;
    background-color: blueviolet;
    border: 1px solid black;
    text-align: center;

    .img-container {
        width: 100%;

        img {
            max-width: 30%;
        }
    }
}
</style>