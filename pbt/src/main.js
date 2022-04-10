import { createApp } from "vue"
import App from "./App.vue"
import Welcome from "./components/WelcomeVue.vue";
import GreetVue from "./components/GreetVue.vue";

//メインフレームワーク構成
createApp(App).mount("#app");


//ログイン管理
let id = String;
id = localStorage.getItem("id");
switch (id) {
    case null:
        createApp(<Welcome  />).mount("#text");
        break;
    default:
        createApp(<GreetVue greet="Hello" id={id} />).mount("#text");
        break;
}