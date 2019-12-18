<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
@import "~@/styles/variables.scss";
  #app {
    background: $mainBg;
  }
</style>
