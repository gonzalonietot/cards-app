<template>
  <v-row justify="center">
    <v-overlay :value="true">
      <v-dialog
        v-model="showDialog"
        width="500"
        persistent
      >
        <v-card class="elevation-24"
                flat
        >
          <v-toolbar
            color="#3F51B5"
            dark
          >
            <v-toolbar-title v-if="!editCard">
              Crear tarjeta
            </v-toolbar-title>
            <v-toolbar-title v-if="editCard">
              Editar tarjeta
            </v-toolbar-title>
            <v-spacer />
            <v-btn icon @click="closeForm">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
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
  import { mapState } from 'vuex'
  export default {
    name: 'HomeForm',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      editCard: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Object,
        default: null
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
        taskEdited: this.selected
      }
    },
    computed: {
      ...mapState(['user'])
    },
    async mounted () {
      if (this.editCard) {
        this.task = this.taskEdited
      }
      await this.$store.dispatch('user_info')
    },
    methods: {
      closeForm () {
        this.$emit('update:show', false)
      },
      async saveCard () {
        if (this.$refs.form.validate()) {
          const data = {
            id_usuario: this.user[0].id_usuario,
            titulo: this.task.titulo,
            descripcion: this.task.descripcion,
            id: this.task.id
          }
          if (this.editCard) {
            await apiTask.editCard(data)
          } else {
            await apiTask.createCard(data)
          }
          this.$emit('success', true)
          this.$emit('update:show', false)
        }
      }
    }
  }
</script>

<style scoped>

</style>