import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import './css/base.css'
import axios from 'axios';
axios.baseUrl = 'http://127.0.0.1:8000';

Vue.prototype.$axios = axios;



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')