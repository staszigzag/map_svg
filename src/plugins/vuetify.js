import Vue from 'vue'
// import Vuetify from 'vuetify/lib'
import Vuetify from 'vuetify/lib/framework'
import ru from 'vuetify/src/locale/ru.ts'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { ru },
    current: 'ru'
  }
})
