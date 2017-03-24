<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="body"></router-view>
    <footer>from cc</footer>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
}
.el-row{
  min-width: 1460px;
}
</style>
