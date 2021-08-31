<template>
  <b-container>
  <form v-on:submit.prevent="addNewTodo">
    <b-row class="my-1">
      <b-col sm="2">
        <label>Add a todo:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input
            v-model="newTodoName"
            id="new-todo"
            placeholder="What needs to be done"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="2">
        <label>Todo description:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input
            v-model="newTodoDescription"
            id="new-todo2"
            placeholder="Describe what must be done"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-button @click="addNewTodo" class="divider" size="lg">Add</b-button>
  </form>
  </b-container>
</template>

<script>
import store from "../store.js"

export default {
  data () {
    return {
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
    addNewTodo () {
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
.divider{
  margin:2px;
  height:auto;
  display:inline-block;
}
</style>