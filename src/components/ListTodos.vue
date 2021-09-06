<template>
  <div>
    <b-card v-if="status === 'todo'" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header pills justified>
          <b-nav-item active >Todos</b-nav-item>
          <b-nav-item to="/done" >Done</b-nav-item>
          <b-nav-item to="/new">New</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body class="text-center">
        <b-card-title>Needs Some Doing</b-card-title>
        <b-list-group v-for="(todo, index) in stillTodos" :key="todo.id">
          <b-list-group-item align="left">
            <router-link :to="{ name: 'TodoDetails', params: {id:todo.id, index:index} }">
              {{ todo.name }}
            </router-link>
              <div align="right">
                <b-button variant="success" @click="completeTodo(todo)" >Done</b-button>
              </div>
            </b-list-group-item>
        </b-list-group>
      </b-card-body>
    </b-card>

    <b-card v-if="status ==='done'" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header pills justified>
          <b-nav-item to="/">Todos</b-nav-item>
          <b-nav-item active >Done</b-nav-item>
          <b-nav-item to="/new">New</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body class="text-center">
        <b-card-title>Already Done</b-card-title>
        <b-list-group v-for="(todo,index) in completeTodos" :key="todo.id">
          <b-list-group-item align="left">
            <router-link :to="{ name: 'TodoDetails', params: {id:todo.id, index:index} }">
              {{ todo.name }}
            </router-link>
            <div align="right">
              <b-button variant="warning" @click="completeTodo(todo)" >Do</b-button>
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-card-body>
    </b-card>

    <b-card v-if="status ==='new'" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header pills justified>
          <b-nav-item to="/">Todos</b-nav-item>
          <b-nav-item to="/done">Done</b-nav-item>
          <b-nav-item active>New</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body class="text-center">
        <b-card-title>New Todo Item</b-card-title>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" style="max-width: 50rem;" align="center">
          <b-form-group id="input-group-1" label="New Todo:" label-for="input-1">
            <b-form-input
                id="input-1"
                v-model="form.name"
                placeholder="Enter todo name"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Todo Description:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.description"
                placeholder="Enter todo description"
                required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>

import {mapGetters} from "vuex/dist/vuex.mjs";

export default {
  name: "ListTodos",
  data () {
    return {
      show: true,
      itemToggle: {},
      form: {
        description: '',
        name: '',
      },
    }
  },
  computed: {
    ...mapGetters([
      'stillTodos',
      'completeTodos'
    ]),

  },
  props:[
      'status'
  ],
  methods:{
    completeTodo(itemIndex) {
      this.$store.commit('completeTodo', itemIndex)
    },
    onSubmit(event) {
      event.preventDefault()
      this.$store.commit('addNewTodo',{
        name: this.form.name,
        description: this.form.description
      })
      this.form.name = ''
      this.form.description = ''
    },
    onReset(event) {
      event.preventDefault()
      // Reset form values
      this.form.name = ''
      this.form.description = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }

}
}
</script>

<style scoped>

</style>