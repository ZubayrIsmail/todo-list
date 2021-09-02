<template>
  <div class="home">
    <h1>Welcome to your Todo List</h1>
    <the-list></the-list>
    <new-item></new-item>
  </div>
</template>

<script>
import TheList from "../components/TheList";
import NewItem from "../components/NewItem";

export default {
  name: "Home",
  components: {
    TheList,
    NewItem
  },
};
</script>
