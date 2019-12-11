import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from './axios';

import App from './App.vue';
import router from './router';
import store from './store';
import AppComponents from './components';

import './styles/main.less';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(AppComponents);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
