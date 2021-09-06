<template>
  <b-progress height="20px" :value="totalComplete" :max="totalTodos" show-progress animated variant="success"></b-progress>
</template>

<script>
import {mapGetters} from "vuex/dist/vuex.mjs";

export default {
  name: "StatusBar",
  computed: {
    ...mapGetters([
      'totalTodos',
      'completeTodos'
    ]),
    totalComplete () {
      return Object.keys(this.completeTodos).length
    }
  }
}
</script>

<style scoped>

</style>