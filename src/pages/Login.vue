<template>
  <login-form v-on:create="createAccount" />
</template>

<script>
  import LoginForm from '../components/LoginForm'
  export default {
    name: 'Login',
    components: {
      LoginForm
    },
    methods: {
      createAccount () {
        this.$router.push({name: 'Registration'})
      }
    }
  }
</script>

<style scoped>

</style>