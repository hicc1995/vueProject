<template>
	<div id="std">
		<el-row class="tac">
			<el-col :span="4" :offset="2">
			  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
			    <el-submenu index="/teach">
			      <template slot="title"><i class="el-icon-message"></i>人员管理</template>
			        <el-menu-item index="/admin/manageStd">学生管理</el-menu-item>
			        <el-menu-item index="/admin/manageTeach">教师管理</el-menu-item>
			    </el-submenu>
			    <el-menu-item index="/admin/manageCourse"><i class="el-icon-menu"></i>课程管理</el-menu-item>
			    <el-menu-item index="/admin/publishInfo"><i class="el-icon-setting"></i>信息发布</el-menu-item>
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