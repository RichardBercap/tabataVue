import Vue from 'vue'

import App from './App.vue'

import Store from './store';

//import './assets/bulma.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store:Store,
}).$mount('#app')
