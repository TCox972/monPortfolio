import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';


import "./assets/scss/custom.css";
import "./assets/main.css"

const app = createApp(App);

app.use(router);
app.use(bootstrap);
app.mount("#app");
