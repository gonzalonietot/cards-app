import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

const vuetify = new Vuetify ({
  themes: {
    light: {
      primary: colors.red.darken1,
      secondary: colors.red.lighten4,
      accent: colors.indigo.base,
    },
  },
  iconfont: 'mdi'
})
export default vuetify