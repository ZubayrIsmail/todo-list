<template>
  <div class="home">
    <h1>The Todo List</h1>
    <b-container>
      <status-bar></status-bar>
      <list-todos :status="'done'"></list-todos>
    </b-container>
  </div>
</template>

<script>
import ListTodos from "../components/ListTodos";
import StatusBar from "../components/StatusBar";
export default {
  name: "Done",
  components: {
    StatusBar,
    ListTodos
  }
}
</script>

<style scoped>

</style>