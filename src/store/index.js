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
        id: Object.keys(state.todos).length + 1,
        name: payload.name,
        description: payload.description,
        completed:false
          }
      )
    }
  },
  actions: {},
  modules: {},
});
