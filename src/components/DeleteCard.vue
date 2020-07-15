<template>
  <v-row justify="center"> 
    <v-dialog
      v-model="dialog"
      max-width="290"
      persistent
    >
      <v-card>
        <v-toolbar
          color="#3F51B5"
          dark
        >
          <v-toolbar-title>Eliminar tarjeta</v-toolbar-title>
          <v-spacer />
          <v-btn icon @click="closeDelete">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="title">
          ¿Estás seguro de eliminar la tarjeta?
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="deleteCard"
          >
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import taskApi from '../api/task'
  export default {
    name: 'DeleteCard',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      taskId: {
        type: Number,
        default: null
      }
    },
    data () {
      return {
        dialog: this.show
      }
    },
    methods: {
      closeDelete () {
        this.$emit('update:show', false)
      },
      deleteCard () {
        taskApi.deleteTask(this.taskId).then(() => {
          this.$emit('success', true)
          this.$emit('update:show', false)
        })
      },
    }
  }
</script>

<style scoped>
  .title {
    margin-top: 20px;
  }
</style>