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
                  required
                  type="text"
                  :rules="[rules.required, rules.maxTitle]"
              />
              <v-textarea
                  v-model="task.descripcion"
                  label="Descripcion"
                  type="text"
                  required
                  :rules="[rules.required, rules.maxDescription]"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn icon color="#3F51B5" @click="saveCard">
              <v-icon>mdi-content-save</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-overlay>
  </v-row>
</template>

<script>
  import apiTask from '../api/task'
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
        overlay: false,
        rules: {
          required: v => !!v || 'Este campo es requerido',
          maxTitle: v => v && v.length <= 25 || 'Se ha superado el máximo permitido',
          maxDescription: v => v && v.length <= 250 || 'Se ha superado el máximo permitido',
        },
      }
    },
    methods: {
      closeForm () {
        this.$emit('update:show', false)
      },
      async saveCard () {
        if (this.$refs.form.validate()) {
          const data = {
            titulo: this.task.titulo,
            descripcion: this.task.descripcion
          }
          await apiTask.createCard(data)
        }
      }
    }
  }
</script>

<style scoped>

</style>