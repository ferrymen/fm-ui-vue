import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'

import * as Style from './button.scss'
import { ButtonMixin } from '../../mixins'

@Component({
  mixins: [ButtonMixin]
})
export default class Button extends Vue {
  render(h: CreateElement) {
    return (
      <div>kkk
        <button
          class={[Style.buttonTextPrimary]}
          onClick={this.handleClick}>
          <span class={[Style.fontSize]}>Hello Button!</span>
        </button>
        <span class={[Style.fontSize]}>Hello Button!</span>
      </div>
    )
  }
}