<template>
  <div>
    <b-container>
      <b-card-group>
        <b-card
            border-variant="danger"
            header="TODO'S"
        >
          <b-list-group v-for="(todo, index) in stillTodos" :key="todo.id">
            <router-link :to="{ name: 'TodoDetails', params: {id:todo.id, index:index} }">
            <b-list-group-item>{{ todo.name }}</b-list-group-item>
            </router-link>
          </b-list-group>
        </b-card>
        <b-card
            border-variant="success"
            header="DONE'S"
        >
          <b-list-group v-for="todo in doneTodos" :key="todo.id">
            <b-list-group-item v-if="todo.completed">{{ todo.name }}</b-list-group-item>
          </b-list-group>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {mapGetters} from "vuex/dist/vuex.mjs";

export default {
  name: "TheList",
  computed: {
    ...mapState({
      todos: state => state.todos
    }),
    ...mapGetters([
      'doneTodos',
      'stillTodos'
    ])
  }
}
</script>

<style scoped>

</style>