import { createApp } from "vue";
import App from "./App.vue";
import BoilerplatePlugin from "./plugins/BoilerplatePlugin";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

// Init App

app.use(BoilerplatePlugin).use(pinia);

app.mount("#app");
