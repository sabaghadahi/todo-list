<template>
  <div>
      <div>
        <div class="container">
        <h1 class="text-center">Todo Application</h1>
        <p>welcome to your application, you can add your todo list and manage them</p>
        <b-form-input v-model="title" placeholder="Enter title"></b-form-input>
        <b-form-input v-model="description" placeholder="Enter description"></b-form-input>
        <b-button pill variant="primary"  @click="addTodo">Add new task</b-button>
        </div>
     </div>
      <div>
        <div class="container">
          <b-list-group>
            <b-list-group-item v-b-modal.modal-info v-for="(todo, index) in todos" :key="index">
              <span :class="{done:todo.done}">{{ todo.title }}</span>
              <b-modal id="modal-info" hide-footer>
                <div class="d-block text-center">
                  <p class="my-4">
                    {{ todo.title }}
                  </p>
                  <p class="my-4">
                    {{ todo.description }}

                  </p>
                </div>
                <b-button class="mt-3" variant="danger" @click="removeTask(index)"  block>delete Me</b-button>
                <b-button class="mt-3" v-b-toggle.collapse-1 variant="primary">edit me</b-button>
                <b-collapse id="collapse-1" class="mt-2">
                  <b-card>

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
    import { mapMutations, mapGetters } from 'vuex'

    export default {
        asyncData ({  }) {

        },
        computed: mapGetters({
            todos: 'todos/todos'
        }),
        methods: {

            addTodo () {

                this.$store.commit('todos/add', {title:this.title, description:this.description})

            },
            ...mapMutations({
                toggle: 'todos/toggle'
            }),
            removeTask(index){
                this.$store.commit('todos/remove',{index})
            },

        }
    }
</script>

<style scoped>

</style>

