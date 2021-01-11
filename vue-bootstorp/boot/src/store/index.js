import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num:0
  },
  mutations: {
    edit(state,num){
      state.num +=1;
      console.log(num)
    },
    a(state){
      Vue.set(state,"age",15);
      console.log(state)
    }
  },
  getters:{
    nameInfo(state){
      return "姓名:"+state.num
    },
    fullInfo(state,getters){
      return getters.nameInfo+'年龄:'+state.age
    }
  },
  actions: {
    aEdit(a,payload){
      a.commit('edit',payload)
    }
  },
  modules: {
  }
})
