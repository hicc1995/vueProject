<template>
	<div id="std">
		<nav>
			<el-col :span="12" :offset="2">
				<p class="navtitle">学生多功能管理系统（教师）</p>
			</el-col>
			<el-col :span="4">
				<el-button class="out" type="info" @click="out">退出账号</el-button>
			</el-col>
		</nav>
		<el-row class="tac">
			<el-col :span="4" :offset="2">
			  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
			    <el-menu-item index="/teach/coursePlan"><i class="el-icon-menu"></i>课程计划</el-menu-item>
			    <el-menu-item index="/teach/publishInfo"><i class="el-icon-setting"></i>信息发布</el-menu-item>
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
	.el-menu-vertical-demo{
		height: 100%;
	}
	.out{
		margin-top: 12px;
	}
	.navtitle{
		font-size: 30px;
		margin: 0;
		padding: 0;
		line-height: 60px;
	}
</style>
<script>
	export default {
		name:'teach',

	  methods: {
	  	out() {
				this.axios.post('/api/user/logout', {})
            .then(res => {
              this.$message({
                showClose: true,
                message: '退出成功',
                type: 'success'
              });
              this.$router.push({ path: '/'})
            })
            .catch(res => {});
			},
	    handleOpen(key, keyPath) {
	      console.log(key, keyPath);
	    },
	    handleClose(key, keyPath) {
	      console.log(key, keyPath);
	    }
	  }
	}
</script>