<template>
    <div class="fade-in">
        <p class="fs-3">はじめまして</p>
        <p>プレイヤーの名前を入力してください</p>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="名前を入力" id="q">
            <input type="button" class="btn btn-outline-secondary" value="OK!" @click="set_id()">
        </div>
    </div>
</template>

<script>
import { createApp } from 'vue';
import GreetVue from "./GreetVue.vue";

export default {
    name : "WelcomeVue",
    methods : {
        set_id () {
            document.getElementById("text").classList.add("fade-out","keep-animation");
            let id = document.getElementById("q").value;
            localStorage.setItem("id",id);
            createApp(<GreetVue greet="Nice to meet you!" id={id} />).mount("#game");
        }
    }
}
</script>