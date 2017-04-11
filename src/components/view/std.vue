<template>
	<div id="std">
		<el-row class="tac">
			<el-col :span="4" :offset="2">
			  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
			    <el-submenu index="/std">
			      <template slot="title"><i class="el-icon-date"></i>课程管理</template>
			        <el-menu-item index="/std/allCourse">所有课程</el-menu-item>
			        <el-menu-item index="/std/myCourse">已选课程</el-menu-item>
			    </el-submenu>
			    <el-menu-item index="/"><i class="el-icon-menu"></i>我的课表</el-menu-item>
			    <el-menu-item index="/std/personal"><i class="el-icon-setting"></i>个人中心</el-menu-item>
			  </el-menu>
			</el-col>
		<el-col :span="16">
			<router-view></router-view>
		</el-col>
		</el-row>
	</div>
</template>
<style scoped>
	.el-menu-vertical-demo{
		height: 100%;
	}
</style>
<script>
	export default {
		name:'std',
	  methods: {
	    handleOpen(key, keyPath) {
	      console.log(key, keyPath);
	    },
	    handleClose(key, keyPath) {
	      console.log(key, keyPath);
	    }
	  }
	}
</script>