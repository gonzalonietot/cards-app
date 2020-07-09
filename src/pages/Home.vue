<template>
  <div>
    <v-toolbar
        dark
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon />
      <v-toolbar-title>Tablero</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="off">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Home',
    computed: {
      ...mapState(['authenticated'])
    },
    methods: {
      off () {
        this.$store.dispatch('signOff').then(() => {
          if (!this.authenticated) {
            this.$router.push('/login')
          }
        })
      }
    }
  }

</script>

<style scoped>
</style>