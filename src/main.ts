import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App.vue";
import router from "./router/index";

createApp(App).use(router).mount("#app");

// import Swiper and modules styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
        