// Build by zhangshuo on 20190926
import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.serverUrl ="http://45.76.105.46:8080";

Vue.prototype.$userId = '';

Vue.prototype.$store = store;

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
