<template>
  <div>
    <v-card class="card-form elevation-24">
      <v-toolbar
        color="#3F51B5"
        dark
      >
        <v-toolbar-title>{{ task.titulo }}</v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="editTask()">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="deleteTask">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list
        subheader
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Descripción:</v-list-item-title>
            <v-list-item-action-text>{{ task.descripcion }}</v-list-item-action-text>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Fecha de creción:</v-list-item-title>
            <v-list-item-subtitle class="text--primary">
              {{ creationDate(task.fecha_creacion) }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <home-form v-if="editCard" :show.sync="editCard" :selected="task" :edit-card="true" />
  </div>
</template>

<script>
  import moment from 'moment'
  import HomeForm from './HomeForm'
  export default {
    name: 'HomeCard',
    components: {
      HomeForm
    },
    props: {
      taskObject: {
        type: Object,
        default: null
      }
    },
    data () {
      return {
        task: this.taskObject,
        editCard: false,
        dialog: false,
      }
    },
    methods: {
      creationDate(date) {
        return moment(date).format('YYYY-MM-DD hh:mm')
      },
      editTask () {
        this.editCard = true
      },
      deleteTask () {
        this.taskId = this.task.id
        this.$emit('delete', this.taskId)
      },
    }
  }
</script>

<style scoped>
  .card-form {
    width: 300px;
    max-height: 300px;
    margin-left: 30px;
    margin-top: 10px;
  }
</style>