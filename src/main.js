import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import uiComponents from "./components/ui-components";

const app = createApp(App);

uiComponents.map((c) => app.component(c.name, c)); // <-registering new components
app.use(router);
app.use(store);
app.mount("#app");
