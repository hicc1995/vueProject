<template>
  <div>
    <el-card class="box-card">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
         <el-tab-pane label="通知通告" name="first">
           <el-collapse v-model="activeNames" accordion >
           <div  v-for="item in inform" :key="item">
             <el-collapse-item :title="item.title">
               <div class="publisher">发布者：{{ item.publisher }} <span>{{ item.createTime }}</span></div>
               <div>{{ item.content }}</div>
             </el-collapse-item>
           </div>
           </el-collapse>
         </el-tab-pane>
         <el-tab-pane label="就业信息" name="second">
           <el-collapse v-model="activeNames" accordion >
           <div  v-for="item in mess" :key="item">
             <el-collapse-item :title="item.title">
               <div class="publisher">发布者：{{ item.publisher }} <span>{{ item.createTime }}</span></div>
               <div>{{ item.content }}</div>
             </el-collapse-item>
           </div>
           </el-collapse>
         </el-tab-pane>
       </el-tabs>
    </el-card>
  </div>
</template>
<style scoped>
  .publisher{
    color: #ccc;
  }
</style>
<script>

module.exports = {
  name: 'infoShow',
  data: function () {
    return {
      activeNames: 1,
      activeName2: 'first',
      inform:[],
      mess:[]
    }
  },
  created() {
    this.acquireData();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    acquireData() {
      this.axios({
        url: '/api/message/messageList',
        method: 'get'
      })
      .then(res => {
        if(res.data.code == 200){
          for(i in res.data.data){
            for(let j = 0 ; j < res.data.data[i].length ; j++){
              let t = new Date(res.data.data[i][j].createTime);
              res.data.data[i][j].createTime = t.getFullYear()+'-'+(t.getMonth()+1)+'-'+t.getDate();
            }
          }
          this.inform = res.data.data.inform;
          this.mess = res.data.data.job;
        }
      })
      .catch(res => {

      });
    }
  }
}
</script>

<style scoped>
</style>
