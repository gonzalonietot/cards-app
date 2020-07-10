<template>
  <v-card class="card-form elevation-24">
    <v-toolbar
        color="#3F51B5"
        dark
    >
      <v-toolbar-title>{{task.titulo}}</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list
        subheader
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Descripción:</v-list-item-title>
          <v-list-item-action-text>{{task.descripcion}}</v-list-item-action-text>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Fecha de creción:</v-list-item-title>
          <v-list-item-subtitle class="text--primary">{{task.fecha_creacion}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: 'HomeCard',
    props: {
      taskObject: {
        type: Object,
        default: null
      }
    },
    data () {
      return {
        task: this.taskObject
      }
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