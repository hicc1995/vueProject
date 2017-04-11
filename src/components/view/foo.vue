<template>
	<div>
		<el-row>
			<!--<el-carousel :interval="4000" type="card" height="200px">
			    <el-carousel-item v-for="item in banners" :key="item">
			      <h3>{{ item }}</h3>
						<img :src="item.imgUrl">
			    </el-carousel-item>
			</el-carousel>-->
      <el-carousel :interval="4000" type="card">
			    <el-carousel-item class="two">
			    </el-carousel-item>
          <el-carousel-item>
						<img src="http://127.0.0.1:8090/src/assets/02.jpg">
			    </el-carousel-item>
          <el-carousel-item class="one">
			    </el-carousel-item>
          <el-carousel-item>
						<img src="http://127.0.0.1:8090/src/assets/04.jpg">
			    </el-carousel-item>
			</el-carousel>
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
	.one{
    /*width: 200px;*/
    /*height: 400px;*/
    background: url('../../assets/03.jpg');
    background-size:  100% 100%;
  }
  .two{
    background: url('../../assets/01.jpg');
    background-size:  100% 100%;
  }
	.el-carousel__item:nth-child(2n+1) {
	  background-color: #d3dce6;
	}
</style>
<script>

// import one from './../assets/01.jpg'
// import two from '../assets/02.jpg'
// import three from '../assets/03.jpg'
// import four from '../assets/04.jpg'
// import five from '../assets/05.jpg'
// var six = require('../assets/logo.png')
// import six from '../assets/logo.png'

module.exports = {
	// name: 'bar',
	data() {
		return {
			banners: [
				{imgUrl: 'assets/01.jpg'},
				{imgUrl: '../../assets/02.jpg'},
				{imgUrl: './assets/03.jpg'},
				{imgUrl: '../assets/04.jpg'},
				{imgUrl: '../assets/05.jpg'},
				{imgUrl: '../assets/logo.png'},
			]
		}
	}
}
</script>
