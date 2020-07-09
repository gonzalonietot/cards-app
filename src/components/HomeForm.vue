<template>
  <v-row justify="center">
    <v-overlay :value="true">
      <v-dialog
          v-model="showDialog"
          width="500"
          persistent
      >
        <v-card class="elevation-24"
                flat>
          <v-toolbar
              color="#3F51B5"
              dark
          >
            <v-toolbar-title>Crear tarjeta</v-toolbar-title>
            <v-spacer />
            <v-btn icon @click="closeForm">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-form
                v-model="valid"
                ref="form"
                lazy-validation
            >
              <v-text-field
                  v-model="task.titulo"
                  label="Título"
              />
              <v-text-field
                  v-model="task.descripcion"
                  label="Descripcion"
                  type="text"
              />
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-overlay>
  </v-row>
</template>

<script>
  export default {
    name: 'HomeForm',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        showDialog: this.show,
        task: {
          tipo: null
        },
        valid: true,
        overlay: false
      }
    },
    methods: {
      closeForm () {
        this.$emit('update:show', false)
      }
    }
  }
</script>

<style scoped>

</style>