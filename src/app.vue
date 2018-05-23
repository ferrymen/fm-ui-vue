<script>
import Vue from 'vue'

export default {
  data() {
    return {
      msg: 'Hello World!'
    }
  },
  render (h) {
    return (
      <section id="root">
        {this.msg}
      </section>
    )
  }
}
</script>

<style>
  #root {
    font-size: 33px;
    color: red;
  }
</style>

