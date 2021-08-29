<template>
  <div>
      <div v-if="!todo.completed">
        <h3>{{ todo.id}} {{ todo.name }}</h3>
        <p>{{ todo.description }}</p>

        <button @click="$emit('mark-done', todo.id)" class="divider">Edit</button>
        <button @click="$emit('remove')" class="divider">Remove</button>
        <button @click="TBC" class="divider">Done</button>
      </div>
  </div>
</template>

<script>

export default {
  name: "list",
  props:[
      'todo'
  ],

  data(){
    return{
      heading: "Todo List"
    }
  },
  methods: {
    TBC() {

    }
  }
}
</script>

<style scoped>
#todos{
  text-align: center;
  border-style: solid;
  padding-bottom:20px;
}
.divider{
  margin:2px;
  height:auto;
  display:inline-block;
}
</style>