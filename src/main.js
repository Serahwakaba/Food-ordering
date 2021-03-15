import Vue from 'vue';
import router from "./router/index.js"
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import { BootstrapVueIcons } from 'bootstrap-vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(BootstrapVue)

Vue.config.productionTip = false




new Vue({
  render: h => h(App),
  router
}).$mount('#app')

