import { createApp, h } from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./App.vue";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props, jeśli będą potrzebne
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;