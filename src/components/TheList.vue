<template>
  <div>
    <b-card-group deck>
      <b-card header="TODO'S" style="max-width: 30rem" align-h="center" >
        <b-list-group v-for="todo in stillTodos" :key="todo.id">
          <router-link :to="{ name: 'TodoDetails', params: {id:todo.id} }">
          <b-list-group-item>{{ todo.name }}</b-list-group-item>
          </router-link>
        </b-list-group>
      </b-card>

      <b-card header="DONE'S" style="max-width: 30rem;" >
        <b-list-group v-for="todo in doneTodos" :key="todo.id">
          <b-list-group-item v-if="todo.completed" href="#">{{ todo.name }}</b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {mapGetters} from "vuex/dist/vuex.mjs";

export default {
  name: "TheList",
  computed: {
    ...mapState({
      todos: state => state.todos,
      todoAlias: 'todos'
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