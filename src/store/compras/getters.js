export default {
  miGarage: (state) => {
    let cantidad = 0
    state.miGarage.forEach(auto => {
      cantidad++
    })
    return { cantidad }
  }
}
