import Vue from 'vue'
import App from './App'
import store from './stores/index'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
Vue.prototype.$store = store
