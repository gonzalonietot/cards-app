<template>
  <v-app>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="start"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-24">
            <v-toolbar
              color="teal darken-2"
              dark
              flat
            >
              <v-toolbar-title>Iniciar sesión</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  label="Email"
                  :rules="[rules.required]"
                  name="email"
                  :append-icon="'mdi-account'"
                  type="text"
                />

                <v-text-field
                  v-model="password"
                  label="Contraseña"
                  name="password"
                  :rules="[rules.required, rules.maxPassword]"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="teal darken-2" dark class="button">
                Ingresar
              </v-btn>
              <v-btn color="teal darken-2" dark class="button" @click="createAccount">
                Crear cuenta
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'LoginForm',
    data: () => {
      return {
        password: '',
        email: '',
        showPassword: false,
        rules: {
          required: v => !!v || 'Este campo es requerido',
          maxPassword: v => v ? v && v.length <= 25 || 'Se ha superado el máximo permitido' : '',
        }
      }
    },
    mounted () {
    },
    methods: {
      createAccount () {
        this.$emit('create')
      }
    }
  }
</script>

<style scoped>
  .button {
    width: 140px;
  }
</style>