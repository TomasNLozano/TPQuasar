import Vue from 'vue'
import Vuex from 'vuex'
import compras from './compras'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    compras
  }
})
