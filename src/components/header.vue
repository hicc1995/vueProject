<template>
  <header>
    <el-menu theme="dark" id="nav" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
      <el-menu-item index='/'>
        HOME
      </el-menu-item>
      <el-menu-item index='/foo'>
        foo
      </el-menu-item>
      <el-menu-item index='/bar'>
        bar
      </el-menu-item>
    </el-menu>
  </header>
</template>

<script>
  export default {
    name: 'header',
    data() {
      return {

      }
    },
    methods: {
      handleSelect(key, keypath){
        console.log(key, keypath)
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
