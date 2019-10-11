// Create by zhangshuo on 20190926
// Vuex 引入
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		mainUrl: "http://45.76.105.46:8080",
		mainName: '',
		mainId: ''
	},
	mutations: {
		
		login(state, provider) {
			state.mainId = provider.mainId;
			state.mainName = provider.mainName;
		}
	}
})

export default store