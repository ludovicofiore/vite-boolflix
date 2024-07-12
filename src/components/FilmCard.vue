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
                    // image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png'
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
        }
    },

}


</script>

<template>
    <div class="card">
        <h3>{{ movieData.title }}</h3>

        <h5>{{ movieData.original_title }}</h5>

        <div class="img-container">
            <img v-if="matchedImage" :src="matchedImage.image" :alt="matchedImage.language" />
            <p v-else>{{ movieData.original_language }}</p>
        </div>
        

        <p>{{ movieData.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card {
    // debug
    width: 200px;
    background-color: aquamarine;
    border: 1px solid black;
    text-align: center;

    .img-container {
        width: 100%;

        img {
            max-width: 50%;
        }
    }
}
</style>