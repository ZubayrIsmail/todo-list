<template>
  <div class="home">
    <h1>{{heading}}</h1>
    <ul>
      <the-list v-for="(todo, index) in todos"
                :key="todo.id"
                :todo='todo'
                v-on:mark-done="completeTask($event)"
                v-on:remove="todos.splice(index, 1)"
      ></the-list>
    </ul>

    <!-- Move to component -->

    Read more: https://html.com/tags/comment-tag/#ixzz74yEABlsS
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
    </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js"
import TheList from "@/components/TheList"
export default {
  name: "Home",
  components: {
      TheList
  },
  data(){
    return{
      heading: "Todo List",
      todos: store.todos
    }
  },
  computed:{
    completeTask(id){
return id
    }
  },
  methods: {
    //move to component
    addNewTodo: function () {
      this.todos.push({
        id: Object.keys(this.todos).length,
        name: this.newTodoName,
        description: this.newTodoDescription,
        completed:false
      })
      this.newTodoName = ''
      this.newTodoDescription = ''
    }
  }
};
</script>
