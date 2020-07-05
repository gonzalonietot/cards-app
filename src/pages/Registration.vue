<template>
  <registration-form v-on:success="createdUser" />
</template>

<script>
  import RegistrationForm from '../components/RegistrationForm'
  export default {
    name: 'Registration',
    components: {
      RegistrationForm
    },
    methods: {
      createdUser () {
        this.$router.push('Login')
      }
    }
  }
</script>

<style scoped>

</style>