
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import EN from './en.json'
import ES from './es.json'


const resources = {
     en : {
          translation : EN
     },

     es : {
          translation : ES
     }
}

i18n.use(initReactI18next).init({
     resources,
     lng : 'en'
})