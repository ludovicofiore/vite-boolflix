<script>

export default {
    name: 'FilmCard',
    props: ['movieData'],
}
</script>

<template>
    <div class="card">
        <h3>{{ movieData.title }}</h3>

        <h5>{{ movieData.original_title }}</h5>

        <p>{{ movieData.original_language }}</p>

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
}
</style>