<template>
  <div class="home">
    <h1>{{heading}}</h1>
    <ul>
      <the-list v-for="(todo, index) in todos"
                :key="todo.id"
                :todo='todo'
                :status='false'
                v-on:mark-done="completeTask($event)"
                v-on:remove="todos.splice(index, 1)"
                v-on:edit-item="editItem($event)"
      ></the-list>
    </ul>
    <new-item></new-item>
    </div>
</template>

<script>
// @ is an alias to /src
import store from "../store.js"
import TheList from "../components/TheList"
import NewItem from "../components/NewItem";
export default {
  name: "Home",
  components: {
      TheList,
      NewItem
  },
  data(){
    return{
      heading: "Todo List",
      todos: store.todos
    }
  },
  methods: {
    completeTask(todo){
      todo.completed = !todo.completed
    },
    editItem(edits){
      edits.todo.name = edits.newName
      edits.todo.description = edits.newDescription
    }
  }
};
</script>
