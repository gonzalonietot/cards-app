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
    <div class="home-form">
      <home-card v-for="(items, index) in tasks" :key="index" :taskObject="items" />
    </div>
    <div class="container">
      <h1 v-if="!task.length" class="title">No hay datos para mostrar</h1>
    </div>
    <home-form v-if="showCard" :show.sync="showCard" @success="loadData()"/>
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
        showCard: false,
        tasks: []
      }
    },
    computed: {
      ...mapState(['authenticated', 'task'])
    },
    mounted (){
      this.loadData()
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
      },
      loadData () {
        this.$store.dispatch('get_all_task').then(() => {
          this.tasks = this.task
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
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 100px;
  }
  .title {
    font-weight: 700;
    text-align: center;
  }
</style>