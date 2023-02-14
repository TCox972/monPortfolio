import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import AOS from 'aos'
import 'aos/dist/aos.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import "./assets/scss/custom.css";
import "./assets/main.css"


const app = createApp(App);

app.use(router);
app.use(bootstrap);
app.use(AOS.init());
app.use(VueSweetalert2);
app.mount("#app");
