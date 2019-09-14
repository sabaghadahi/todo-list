export default {
  add (state, {title,description}) {
    state.list.push({
      title,
      description,
      done: false
    })
  },
  remove(state, index){
    state.list.splice(state.list.indexOf(index))
    }
    ,
  update (state, { title, description}) {
    state.list.title = title
    state.list.description = description
  }
}
