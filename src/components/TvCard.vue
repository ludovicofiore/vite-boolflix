<script>

export default {
    name: 'TvCard',
    props: ['serieData'],
}
</script>

<template>
    <div class="card">
        <h3>{{ serieData.name }}</h3>

        <h5>{{ serieData.original_name }}</h5>

        <p>{{ serieData.original_language }}</p>

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
}
</style>