import Vue, { VNode } from 'vue'

export default Vue.extend ({
  name: 'v-app',
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  render (h): VNode {
    return (
      <div id="root">
        {this.msg}
      </div>
    )
  }
})
