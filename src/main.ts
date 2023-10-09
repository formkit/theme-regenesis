import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { plugin, defaultConfig } from "@formkit/vue";
import { genesisIcons } from "@formkit/icons";

const app = createApp(App);
app.use(
  plugin,
  defaultConfig({
    icons: genesisIcons,
  }),
);
app.mount("#app");
