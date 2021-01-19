import createApp from './createApp';
import Vue from 'vue';


Vue.config.productionTip = false

const { app, router, store } = createApp();

app.$mount('#app');

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  app.$mount('#app', true);
});
