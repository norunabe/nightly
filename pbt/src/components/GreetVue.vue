<template>
    <p class="fs-1 fade-in-out keep-animation" id="greet">{{ greet }} {{ id }}</p>
</template>

<script>
export default {
    name : "GreetVue",
    props : {
        greet : String,
        id : String
    }
};
</script>

<style scoped>
    .fade-in-out {
        animation-timing-function: ease !important;
    }
</style>