<template>
  <div>
    <b-card v-if="status === 'todo'" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header pills justified>
          <b-nav-item active >Todos</b-nav-item>
          <b-nav-item to="/done" >Done</b-nav-item>
          <b-nav-item>New</b-nav-item>
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
          <b-nav-item>New</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body class="text-center">
        <b-card-title>Already Done</b-card-title>
        <b-list-group v-for="(todo) in completeTodos" :key="todo.id">
          <b-list-group-item align="left">
            {{ todo.name }}
            <div align="right">
              <b-button variant="warning" @click="completeTodo(todo)" >Do</b-button>
            </div>
          </b-list-group-item>
        </b-list-group>
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
      itemToggle: {}
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
    }
}
}
</script>

<style scoped>

</style>