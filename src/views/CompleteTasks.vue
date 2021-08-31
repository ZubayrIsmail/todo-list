<template>
  <div>
    <h1>{{ heading }}</h1>
    <ul>
      <the-list v-for="(todo, index) in todos"
                :key="todo.id"
                :todo='todo'
                :status='true'
                v-on:mark-done="completeTask($event)"
                v-on:remove="todos.splice(index, 1)"
      ></the-list>
    </ul>
  </div>
</template>

<script>
import store from "../store.js"
import TheList from "../components/TheList"

export default {
  name: "CompleteTasks",
  components: {
    TheList
  },
  data(){
    return{
      heading: "Completed Todo items",
      todos: store.todos
    }
  },
  methods: {
    completeTask(todo){
      todo.completed = !todo.completed
    }
  }
}
</script>

<style scoped>

</style>