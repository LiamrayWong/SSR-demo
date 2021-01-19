import Vue from 'vue';
import App from './App';
import createRouter from './createRouter';
import createStore from "@/createStore";

export default function createApp() {
  const router = createRouter();
  const store = createStore
  const app = new Vue({
    router,
    render: h => h(App)
  });
  return {
    app,
    router,
    store
  };
}
