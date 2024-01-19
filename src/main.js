import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Import any additional components, plugins, or libraries

const app = createApp(App);

// Register global components
app.component("Mycomp", 'Mycomp');

// Mount the app to the DOM
app.mount("#app");
