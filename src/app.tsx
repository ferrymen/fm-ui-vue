import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue{
  msg = 'Hello World!'
  render (h: Function): VNode {
    return (
      <div id="root">
        {this.msg}
      </div>
    )
  }
}
