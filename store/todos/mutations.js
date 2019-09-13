export default {
  add (state, {title,description}) {
    state.list.push({
      title,
      description,
      done: false
    })
  },
  remove (state, { todo }) {
            state.list.pop(state.list.indexOf(todo), 1)
  },

  toggle (state, todo) {
    todo.done = !todo.done
  }
}
