<template>
  <v-card class="card-form elevation-24">
    <v-toolbar
        color="#3F51B5"
        dark
    >
      <v-toolbar-title>Tarea</v-toolbar-title>
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
          <v-list-item-subtitle class="text--primary">{{message}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Fecha de creción:</v-list-item-title>
          <v-list-item-subtitle class="text--primary">5 de julio</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: 'HomeForm',
    props: {
      message: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .card-form {
    width: 300px;
    height: 250px;
    margin-left: 30px;
    margin-top: 10px;
  }
</style>