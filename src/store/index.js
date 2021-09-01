import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import defaultStore from "../DefaultStore.js"
export default new Vuex.Store({
  state: {
    todos: defaultStore.todos
  },
  getters: {
    stillTodos: state => {
      return state.todos.filter(todo => !todo.completed)
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.completed)
    },

  },
  mutations: {
    addNewTodo (state, payload) {
      state.todos.push({
        id: Object.keys(state.todos).length + 2,
        name: payload.name,
        description: payload.description,
        completed:false
          }
      )
    },
    editTodo (state, payload){
      payload.item.name = payload.newName
      payload.item.description = payload.newDescription
    },
    deleteTodo (state, payload) {
      state.todos.splice(payload,1)
    },
    completeTodo (state, payload){
      payload.completed = !payload.completed
    }
  },
  actions: {},
  modules: {},
});
