<template>
  <div>
      <div>
        <div class="container">
        <h1 class="text-center">Todo Application</h1>
        <p>welcome to your application, you can add your todo list and manage them</p>
        <b-form-input v-model="title" placeholder="Enter title" autocomplete="off" required></b-form-input>
        <b-form-input v-model="description" placeholder="Enter description" autocomplete="off" required></b-form-input>
        <b-button pill variant="primary"  @click="addTodo">Add new task</b-button>
        </div>
     </div>
      <div>
        <div class="container">
          <b-list-group>
            <b-list-group-item  v-for="(todo, index) in todos" :key="index">
              <span v-b-modal="'myModal' + todo.title" :class="{done:todo.done}">{{ todo.title }}</span>
              <b-modal :id="'myModal' + todo.title" hide-footer>
                <div class="d-block text-left">
                  <p class="my-4">
                    title :
                    {{ todo.title }}
                  </p>
                  <p class="my-4">
                    description :
                    {{ todo.description }}
                  </p>
                </div>
                <b-button class="mt-3" variant="danger" @click="removeTask(todo.index)"  block>delete Me</b-button>
                <b-button class="mt-3" v-b-toggle.collapse-1 variant="primary">edit me</b-button>
                <b-collapse id="collapse-1" class="mt-2">
                  <b-card>
                    <b-form-input id="title" type="text" :value="todo.title" autocomplete="off"></b-form-input>
                    <b-form-input id="title" type="text" :value="todo.description" autocomplete="off"></b-form-input>
                    <b-button pill variant="primary" @click="update(todo.index)" >edit me</b-button>
                  </b-card>
                </b-collapse>
              </b-modal>
            </b-list-group-item>
          </b-list-group>
        </div>
      </div>
  </div>
</template>
<script>
    export default {
        computed: {
            todos:{
                get() {
                    return this.$store.state.todos.list
                },
            }
        },
        methods: {

            addTodo () {
                const title = this.title
                const description = this.description
                this.$store.commit('todos/add', {title, description})

            },
            removeTask(index){
                this.$store.commit('todos/remove',{index})
            },
            update(index) {
                const title = this.title
                const description = this.description
                this.$store.commit('todos/update', {index, title,description })
            },
        }
    }
</script>

<style scoped>

</style>

