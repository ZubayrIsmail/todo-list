<template>

    <form v-on:submit.prevent="$emit('new-goal' )">
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
export default {
  name: "NewItem",
  data(){
    return{
      goalName: '',
      goalDescription:''
    };
  },
  methods: {
    newTodo(){
    return{
      newName: this.newTodoName,
      newDescription: this.newDescription,
  
}
    }
  },

};
</script>

<style scoped>

</style>