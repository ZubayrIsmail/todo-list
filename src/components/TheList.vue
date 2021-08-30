<template>
  <div>
    <div v-if="status === false && todo.completed === false">
      <section class="todos"  @click="onClickDetails(todo.id)">
        <h2>{{ todo.name }}</h2>
        <div v-if="selectedId">
          <p>{{ todo.description }}</p>
          <button @click="$emit('mark-done', todo)" class="divider">Done</button>
          <button @click="$emit('remove')" class="divider">Remove</button>
          <button @click="TBC" class="divider">Edit</button>
        </div>
      </section>
    </div>
    <div v-if="status === true && todo.completed === true">
      <section class="todos"  @click="onClickDetails(todo.id)">
        <h2>{{ todo.name }}</h2>
        <div v-if="selectedId">
          <p>{{ todo.description }}</p>
          <button @click="$emit('mark-done', todo)" class="divider">Do</button>
          <button @click="$emit('remove')" class="divider">Remove</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: "list",
  props:[
      'todo',
      'status'
  ],

  data(){
    return{
      heading: "Todo List",
      selectedId: false
    }
  },
  methods: {
    TBC() {
    },
    onClickDetails(id){
      if (this.selectedId === id) {
        this.selectedId = null}
      else{
        this.selectedId = id
      }

    }
  }
}
</script>

<style scoped>
.todos{
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