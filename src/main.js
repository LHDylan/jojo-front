import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

const API_ENDPOINT = process.env.VUE_APP_JOJO_API;

console.warn(API_ENDPOINT);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
