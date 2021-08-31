<template>
  <div>
    <div v-if="status === false && todo.completed === false">
      <section class="todos"  @click="onClickDetails(todo.id)">
        <div v-if="!editing">
          <h3>{{ todo.name }}</h3>
          <div v-if="selectedId">
            <p>{{ todo.description }}</p>
            <b-button variant="success" @click="$emit('mark-done', todo)" class="divider">Done</b-button>
            <b-button variant="danger" @click="$emit('remove')" class="divider">Remove</b-button>
            <b-button @click="enableEditing" class="divider">Edit</b-button>
          </div>
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
      </section>

    </div>
    <div v-if="status === true && todo.completed === true">
      <section class="todos"  @click="onClickDetails(todo.id)">
        <h2>{{ todo.name }}</h2>
        <div v-if="selectedId">
          <p>{{ todo.description }}</p>
          <b-button @click="$emit('mark-done', todo)" class="divider">Do</b-button>
          <b-button variant="danger" @click="$emit('remove')" class="divider">Remove</b-button>
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
      selectedId: false,
      newName: this.todo.name,
      newDescription: this.todo.description,
      editing: false
    }
  },
  methods: {

    enableEditing() {
      this.editing = true;
    },
    disableEditing() {
      this.newName = this.todo.name
      this.newDescription= this.todo.description
      this.editing = false;
    },
    onClickDetails(id){
      if (this.selectedId === id) {
        this.selectedId = null}
      else{
        this.selectedId = id
      }
    },
    saveEdit(){
      let todo = this.todo
      let newName = this.newName
      let newDescription = this.newDescription
      this.$emit('edit-item',{todo, newName, newDescription})
      this.disableEditing();
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