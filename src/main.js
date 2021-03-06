import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//引入阿里巴巴图标vue
import "@/assets/icon/iconfont.css";
import "@/assets/icon/iconfont.js";
