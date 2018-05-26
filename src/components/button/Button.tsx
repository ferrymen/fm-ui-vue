import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  render(h: CreateElement) {
    return (
      <div>
        <button>Hello Button!</button>
      </div>
    )
  }
}