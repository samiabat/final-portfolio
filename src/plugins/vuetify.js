// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {aliases, fa} from 'vuetify/iconsets/fa'

// Vuetify
import { createVuetify } from 'vuetify'
// import { from } from 'core-js/core/array'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
      }
    }
  }
)
