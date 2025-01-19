import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.scss";
import { Icon } from "@iconify/vue";

const app = createApp(App);

// eslint-disable-next-line vue/multi-word-component-names
app.component("Icon", Icon);

app.mount("#app");
