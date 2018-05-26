import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'

import * as Style from './button.scss'

@Component
export default class Button extends Vue {
  render(h: CreateElement) {
    return (
      <div>
        <button
          class={[Style.buttonTextPrimary]}>
          <span class={[Style.fontSize]}>Hello Button!</span>
        </button>
        <span class={[Style.fontSize]}>Hello Button!</span>
      </div>
    )
  }
}