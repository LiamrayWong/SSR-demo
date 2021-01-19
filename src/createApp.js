import Vue from 'vue';
import App from './App';
import createRouter from './createRouter';

export default function createApp () {
  const router = createRouter();
  const app = new Vue({
    router,
    render: h => h(App)
  });
  return {
    app,
    router
  };
}
