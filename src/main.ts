import './assets/normalize.css'
import './assets/font-awesome.min.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import translationEn from '@/translations/en'
import translationFr from '@/translations/fr'
import App from './App.vue'

const pinia = createPinia()

const messages = {
  en: translationEn,
  fr: translationFr
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

const app = createApp(App)
app.use(pinia)
app.use(i18n)
app.mount('#app')
