import { createApp } from "vue"
import App from "./App.vue"
import Welcome from "./components/WelcomeVue.vue";

//メインフレームワーク構成
createApp(App).mount("#app");


//ログイン管理
let id;
id = localStorage.getItem("id");
switch (id) {
    case null:
        createApp(Welcome).mount("#text");
}
