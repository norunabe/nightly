import { createApp } from "vue"
import App from "./App.vue"
import WelcomeVue from "./components/WelcomeVue.vue";
import GreetVue from "./components/GreetVue.vue";

//メインフレームワーク構成
createApp(App).mount("#app");


//ログイン管理
let id = String;
id = localStorage.getItem("id");
const id_check = () => {
    switch (id) {
        case null:
            createApp(<WelcomeVue  />).mount("#text");
            break;
        default:
            createApp(<GreetVue greet="Hello" id={id} />).mount("#game");
            break;
    }
}

const main = () => {
    id_check();
}
main();