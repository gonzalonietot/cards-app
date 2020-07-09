<template>
    <v-dialog
        transition="dialog-bottom-transition"
        :overlay="true"
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
            <v-autocomplete
                v-model="task.tipo"
                label="Tipo de tarea"
                :items="items"
                item-text="descripcion"
                item-value="id"
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
        valid: true
      }
    },
    computed: {
      items () {
        return [
          {'id': 1, 'descripcion': 'Nota'},
          {'id': 2, 'descripcion': 'Tarea'},
          {'id': 3, 'descripcion': 'Recordatorio'}
        ]
      }
    },
    mounted () {
      console.log(this.items)
      this.task.tipo = this.items[0].id
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