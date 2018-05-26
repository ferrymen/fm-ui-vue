import Vue, { CreateElement } from 'vue'
import App from './app'

import '@ferrymen/fm-style/main.scss'

new Vue({
  el: '#root',
  render (h: CreateElement) {
    return (
      <App />
    )
  }
})