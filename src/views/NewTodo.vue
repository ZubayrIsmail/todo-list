<template>
  <div>
    <h1> The Todo List </h1>
    <b-container>
      <status-bar></status-bar>
      <list-todos :status="'new'"></list-todos>
    </b-container>
  </div>
</template>

<script>
import ListTodos from "../components/ListTodos";
import StatusBar from "../components/StatusBar";

export default {
  name: "NewTodo",
  components: {
    StatusBar,
    ListTodos
  }
}
</script>

<style scoped>

</style>