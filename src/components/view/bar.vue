<template>
	<div>
		<el-row>
			<el-carousel :interval="4000" type="card">
			    <el-carousel-item v-for="item in banners" :key="item">
						<img :src="item" class="img">
			    </el-carousel-item>
			</el-carousel>
		</el-row>
		<br>
		<el-row>
		  <el-col :span="6"><login class="grid-content bg-purple"></login></el-col>
		  <el-col :span="10" :offset="1"><info-show class="grid-content bg-purple-light"></info-show></el-col>
		  <el-col :span="6" :offset="1"><check-results class="grid-content bg-purple"></check-results></el-col>
		</el-row>
	</div>
</template>
<style scoped>
	.el-carousel__item h3 {
	  color: #475669;
	  font-size: 14px;
	  opacity: 0.75;
	  line-height: 200px;
	  margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
	  background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
	  background-color: #d3dce6;
	}
	.img{
		width: 100%;
		height: 100%;
	}
</style>
<script>
var login = require('../login.vue')
var infoShow = require('../infoShow.vue')
var checkResults = require('../checkResults.vue')


module.exports = {
	// name: 'bar',
  components: {
    'login': login,
    'info-show': infoShow,
    'check-results': checkResults
  },
	data() {
		return {
			banners: [ 'https://xcard-dev.oss-cn-shanghai.aliyuncs.com/avatar/gvOFhL0oWSZzPvS1upbtLhqzsx3tRCvw_01.jpg',
				'https://xcard-dev.oss-cn-shanghai.aliyuncs.com/avatar/L7nrlbXvh9fdBjUYHTcMtDRsyAooXu2T_02.jpg',
				'https://xcard-dev.oss-cn-shanghai.aliyuncs.com/avatar/toDE0z4TbcBYbzIyUFbA3m8K6zbmtAHb_03.jpg',
				'https://xcard-dev.oss-cn-shanghai.aliyuncs.com/avatar/AzuPLQFZ3bqcQumi4DbO82s56kjGZWsr_04.jpg',
				'https://xcard-dev.oss-cn-shanghai.aliyuncs.com/avatar/yEfxcW13ufszZ44nFgFTtNfrr0L4FCEt_05.jpg',
			]
		}
	}
}
</script>
