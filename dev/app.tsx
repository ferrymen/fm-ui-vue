import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'

// Object literal may only specify known properties, but 'components'
// does not exist in type 'VueClass<Vue>'. Did you mean to write 'component'?
// `./components/button`
// export default {
//   Button
// }
// import Button from './components/button'

import { Button } from '@ferrymen/fm-vue'

@Component({
  components: {
    Button
  }
})
export default class App extends Vue {
  msg = 'Hello World!'
  render (h: CreateElement) {
    return (
      <div id="root">
        {this.msg}
        <Button />
      </div>
    )
  }
}
