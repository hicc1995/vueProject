<template>
	<el-row>
	  <el-col :span="6"><login class="grid-content bg-purple"></login></el-col>
	  <el-col :span="12"><info-show class="grid-content bg-purple-light"></info-show></el-col>
	  <el-col :span="6"><check-results class="grid-content bg-purple"></check-results></el-col>
	</el-row>
</template>
<script>
var login = require('../login.vue')
var infoShow = require('../infoShow.vue')
var checkResults = require('../checkResults.vue')

module.exports = {
	name: 'bar',
  components: {
    'login': login,
    'info-show': infoShow,
    'check-results': checkResults
  }
}
</script>
