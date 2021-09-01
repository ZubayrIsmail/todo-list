<template>
<div>
  <div v-if="!editing">
    <h1>{{ todoItem.name }}</h1>
    <p>{{ todoItem.description }}</p>
    <router-link to="/">
      <b-button>back</b-button>
      <b-button variant="danger" @click="deleteTodo">Remove</b-button>
      <b-button variant="success" @click="completeTodo" class="divider">Done</b-button>
    </router-link>
    <b-button @click="enableEditing" class="divider">Edit</b-button>
  </div>

  <div v-if="editing">
    <b-container fluid>
      <b-row class="my-1">
        <b-col sm="2">
          <label>Name:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input v-model="newName"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label>Description:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input v-model="newDescription"></b-form-input>
        </b-col>
      </b-row>
      <b-button @click="disableEditing" class="divider"> Cancel </b-button>
      <b-button @click="saveEdit" class="divider"> Save </b-button>
    </b-container>
  </div>
</div>

</template>

<script>
import {mapState} from "vuex";
export default {
  data(){
    return{
      todoId: this.$route.params.id,
      todoIndex: this.$route.params.index,
      editing: false
    }
  },
  name: "TodoDetails",
  computed: {
    ...mapState({
      todos: state => state.todos,
      todoAlias: 'todos'
    }),
    todoItem () {
      return this.todos.find(
          todo => todo.id === this.todoId
      )
    }
  },
  methods: {
    enableEditing() {
      this.editing = true;
      this.newName = this.todoItem.name
      this.newDescription= this.todoItem.description
    },
    disableEditing() {
      this.newName = this.todoItem.name
      this.newDescription= this.todoItem.description
      this.editing = false;
    },
    saveEdit(){
      this.$store.commit('editTodo', {item: this.todoItem, newName: this.newName, newDescription: this.newDescription})
      this.disableEditing();
    },
    deleteTodo () {
      this.$store.commit('deleteTodo',
          this.todoIndex
      )
    },
    completeTodo () {
      this.$store.commit('completeTodo', this.todoItem)
    }
  }
}
</script>

<style scoped>

</style>