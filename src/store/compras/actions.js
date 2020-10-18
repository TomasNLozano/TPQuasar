import * as types from './types'

export default {
  [types.COMPRAR_AUTO]: function ({ commit, state }, data) {
    commit(types.COMPRAR_AUTO, data)
  },
  [types.VENDER_AUTO]: function ({ commit, state }, data) {
    commit(types.VENDER_AUTO, data)
  }
}
