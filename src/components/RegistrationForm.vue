<template>
  <v-app>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row 
        align="center"
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
              <v-btn icon class="hidden-xs-only" @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-toolbar-title>Registrar usuario</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-text-field
                  v-model="user.nombre"
                  :rules="[rules.required]"
                  label="Nombre"
                  required
                />
                <v-text-field
                  v-model="user.apellido"
                  :rules="[rules.required]"
                  label="Apellido"
                  required
                />
                <v-text-field
                  v-model="user.documento"
                  :rules="[rules.required]"
                  label="Documento"
                  required
                />
                <v-text-field
                  v-model="user.email"
                  label="Email"
                  :rules="[rules.required]"
                  name="email"
                  required
                />

                <v-text-field
                  v-model="user.password"
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
              <v-btn color="teal darken-2" dark @click="createUser()">
                Crear usuario
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import userApi from '../api/user'
  export default {
    name: 'RegistrationForm',
    data: () => {
      return {
        user: {},
        showPassword: false,
        rules: {
          required: v => !!v || 'Este campo es requerido',
          maxPassword: v => v && v.length <= 25 || 'Se ha superado el máximo permitido',
        }
      }
    },
    methods: {
      goBack () {
        this.$router.push({name: 'Login'})
      },
      async createUser () {
        try {
          await userApi.createUser(this.user)
        } catch (e) {
        }
      }
    }
  }
</script>

<style scoped>

</style>