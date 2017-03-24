<template>
  <div>
    <el-card class="box-card">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
         <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
         <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
         <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
         <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
       </el-tabs>
    </el-card>
  </div>
</template>

<script>

module.exports = {
  name: 'checkResults',
  data: function () {
    return {
      activeName2: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style>

</style>
