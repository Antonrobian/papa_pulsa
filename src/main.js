import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// import './assets/main.css'

createApp(App).mount("#app");

createApp(App).use(Router).mount("#app");
