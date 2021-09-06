import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import DefaultStore from "../DefaultStore";
export default new Vuex.Store({
  state: {
    todos: DefaultStore.todos
  },
  getters: {
    stillTodos: state =>{
      return state.todos.filter(todo => !todo.completed)
    },
    completeTodos: state => {
      return state.todos.filter(todo => todo.completed)
    },
    totalTodos: state => {
      return Object.keys(state.todos).length
    }
  },
  mutations: {
    completeTodo (state, payload){
      payload.completed = !payload.completed
    },
    editTodo (state, payload){
      payload.item.name = payload.newName
      payload.item.description = payload.newDescription
    },
    deleteTodo (state, payload) {
      state.todos.splice(payload,1)
    },
    addNewTodo (state, payload) {
      state.todos.push({
            id: Object.keys(state.todos).length + 2,
            name: payload.name,
            description: payload.description,
            completed:false
          }
      )
    },
  },
  actions: {},
  modules: {},
});
