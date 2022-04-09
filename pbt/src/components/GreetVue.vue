<template>
    <p class="fs-1 fade-in" id="greet">{{ greet }} {{ id }}</p>
</template>

<script>
export default {
    name : "GreetVue",
    props : {
        greet : String,
        id : String
    }
}
</script>