<template>
  <div>
    <v-toolbar
        data-app
        dark
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon />
      <v-toolbar-title>Tablero</v-toolbar-title>
      <v-spacer />
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="toClose">
            <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
            >mdi-close-box-multiple
            </v-icon>
          </v-btn>
        </template>
        <span>Cerrar sesión</span>
      </v-tooltip>
    </v-toolbar>
    <div class="home-form">
      <home-form v-for="(items, index) in mensaje" :key="index" :message="items" />
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import HomeForm from '../components/HomeForm'
  export default {
    name: 'Home',
    components: {
      HomeForm
    },
    data () {
      return {
        mensaje: ['Hola Hola Hola Hola Hola HolaHola Hola HolaHola Hola Hola', 'Chau', 'Hola', 'Chau', 'Hola', 'Chau','Hola', 'Chau']
      }
    },
    computed: {
      ...mapState(['authenticated'])
    },
    methods: {
      toClose () {
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
  .home-form {
    display: flex;
    flex-wrap: wrap;
  }
</style>