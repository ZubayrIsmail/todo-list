<template>
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input
        v-model="newTodoName"
        id="new-todo"
        placeholder="What needs to be done"
    >
    <label for="new-todo">Todo description</label>
    <input
        v-model="newTodoDescription"
        id="new-todo2"
        placeholder="Describe what must be done"
    >
    <button>Add</button>
  </form>
</template>

<script>
import store from "../store.js"

export default {
  data(){
    return{
      todos: store.todos,
      newTodoName:'',
      newTodoDescription:''
    }
  },
  props:[
      //'todos'
  ],
  name: "NewItem",
  methods: {
    addNewTodo() {
      this.todos.push({
        id: Object.keys(this.todos).length + 1,
        name: this.newTodoName,
        description: this.newTodoDescription,
        completed:false
      })
      this.newTodoName = ''
      this.newTodoDescription = ''
    }
  }
}
</script>

<style scoped>

</style>