export default {
  add ({ commit }, {title,description}) {
    commit('add', {
      title,
      description,
      done: false
    })
  },
  remove ({ commit }, todo) {
    commit('remove', {
      todo
    })
  },
}
