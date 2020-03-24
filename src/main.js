import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueSmoothScroll from 'vue2-smooth-scroll'
import AOS from 'aos';
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import scrollAnimation from './directives/scrollanimation';

Vue.directive('scrollanimation',  scrollAnimation )

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css';
import './plugins/axios'
import './plugins/fontawesome'



Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(vueSmoothScroll)
AOS.init();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
