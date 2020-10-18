import * as types from './types'

export default {
  [types.COMPRAR_AUTO]: function (state, data) {
    state.misAutos.push(data)
  },
  [types.VENDER_AUTO]: function (state, data) {
    state.misAutos.pop(data)
  }
}
