<template>
  <div id="app">
    <!--<router-view name="header"></router-view>-->
    <router-view name="body"></router-view>
    <router-view name="content"></router-view>
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
  /*min-width: 1300px;*/
}
</style>
