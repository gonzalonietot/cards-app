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
              color="#3F51B5"
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
                  v-model="user.email"
                  label="Email"
                  :rules="rules.emailRules"
                  name="email"
                  required
                  @blur="checkUser"
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
                <v-alert v-model="userExists" type="error">
                  Ya existe un usuario con estos datos
                </v-alert>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="#3F51B5" dark @click="createUser()">
                Crear usuario
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar
      v-model="successUser"
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      Usuario creado
    </v-snackbar>
    <v-snackbar
      v-model="errorUser"
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      Falló el registro del usuario
    </v-snackbar>
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
          emailRules: [
            v => !!v || 'Email es requerido',
            v => /.+@.+\..+/.test(v) || 'Email incorrecto'
          ]
        },
        color: 'blue',
        mode: '',
        x: null,
        y: 'top',
        timeout: 3000,
        successUser: false,
        errorUser: false,
        userExists: false
      }
    },
    methods: {
      goBack () {
        this.$router.push({name: 'Login'})
      },
      async checkUser () {
        if (this.user.email) {
          const user = await userApi.checkUser({email: this.user.email})
          this.userExists = !!user.data
        }
      },
      async createUser () {
        try {
          if (!this.userExists && this.$refs.form.validate()) {
            const response = await userApi.createUser(this.user)
            if (response && response.data) {
              this.successUser = true
              setTimeout(() => {
                this.$emit('success')
              }, 3000)
              this.$refs.form.reset()
            }
          }
        } catch (e) {
          this.errorUser = true
        }
      }
    }
  }
</script>

<style scoped>

</style>