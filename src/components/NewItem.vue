<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="New Todo:" label-for="input-1">
        <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder="Enter todo name"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Todo Description:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="form.description"
            placeholder="Enter todo description"
            required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "NewItem",
  data() {
    return {
      form: {
        description: '',
        name: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
     this.$store.commit('addNewTodo',{
        name: this.form.name,
        description: this.form.description
      })
      this.form.name = ''
      this.form.description = ''
    },
    onReset(event) {
      event.preventDefault()
      // Reset form values
      this.form.name = ''
      this.form.description = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>

</style>