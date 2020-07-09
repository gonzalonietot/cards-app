<template>
  <div>
    <v-toolbar
        data-app
        dark
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-toolbar-title class="home-title">Tablero</v-toolbar-title>
      <v-spacer />
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="createCard()">
            <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
            >mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <span>Crear tarjeta</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="toClose()">
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
    <home-form v-if="showCard" :show.sync="showCard" />
    <div class="home-form">
      <home-card v-for="(items, index) in mensaje" :key="index" :message="items" />
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import HomeCard from '../components/HomeCard'
  import HomeForm from '../components/HomeForm'
  export default {
    name: 'Home',
    components: {
      HomeForm,
      HomeCard
    },
    data () {
      return {
        mensaje: ['Hola Hola Hola Hola Hola HolaHola Hola HolaHola Hola Hola', 'Chau', 'Hola', 'Chau', 'Hola', 'Chau','Hola', 'Chau'],
        showCard: false
      }
    },
    computed: {
      ...mapState(['authenticated'])
    },
    methods: {
      createCard () {
        this.showCard = true
      },
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
  .home-title {
    margin-left: 40px
  }
  .home-form {
    display: flex;
    flex-wrap: wrap;
  }
</style>