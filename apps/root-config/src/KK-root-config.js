import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return import(/* webpackIgnore: true */ name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

registerApplication({
  name: "@KK/React-micro",
  app: () => import("@KK/React-micro"),
  activeWhen: ["/products"],
});

registerApplication({
  name: "@KK/vue-mfe",
  app: () => System.import("@KK/vue-mfe"),
  activeWhen: ["/cart"],
});

registerApplication({
  name: "@KK/svelte-mfe",
  app: () => System.import("@KK/svelte-mfe"),
  activeWhen: ["/profile"],
});

applications.forEach(registerApplication);
layoutEngine.activate();
start();
