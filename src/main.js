import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(vueSmoothScroll)

// Usage
// <a href="#div-id" v-smooth-scroll>Anchor</a>
// <div id="div-id"></div>

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
