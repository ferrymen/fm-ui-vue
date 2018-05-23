<template>
  <section id="root">
    {{msg}}
  </section>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
  #root {
    font-size: 33px;
    color: red;
  }
</style>

