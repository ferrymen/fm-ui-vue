import Vue, { CreateElement } from 'vue'
import App from './app'

import './main.scss'

new Vue({
  el: '#root',
  render (h: CreateElement) {
    return (
      <App />
    )
  }
})