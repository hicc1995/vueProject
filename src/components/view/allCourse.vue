<template>
  <div>
    <div class="title">
      <p>所有课程</p>
    </div>
    <el-table :data="tableDate" border style="width: 100%">
<el-table-column prop="date" label="上课时间">
</el-table-column>
<el-table-column prop="couName" label="课程名称">
</el-table-column>
<el-table-column prop="startTime" label="开始时间">
</el-table-column>
<el-table-column prop="endTime" label="结束时间">
</el-table-column>
<el-table-column prop="taeName" label="教师名称">
</el-table-column>
<el-table-column prop="college" label="学院">
</el-table-column>
<el-table-column label="操作">
  <template scope="scope">
    <el-button @click.native.prevent="selectRow(scope.$index, tableDate)" type="text" size="small">
      选择课程
    </el-button>
  </template>
</el-table-column>
</el-table>
<el-pagination layout="prev, pager, next" :total="pages" :current-page="currentPage" @current-change="handleCurrentChange">
</el-pagination>
</div>
</template>
<style scoped>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
<script>
  export default {
    created() {
      this.acquireDate(1);
    },
    methods: {
      acquireDate(pageNum) {
        this.axios.get('/api/stu/couList', {
          params: {
            pageNum: pageNum, //第几页
            pageSize: 10,  //每页数据(默认10条)
          }
        })
          .then(res => {
            if (res.data.code == 403) {
              this.$router.push({ path: '/' })
            }
            for(let i = 0 ; i < res.data.data.list.length ; i++){
              let d = new Date(res.data.data.list[i].startTime);
              res.data.data.list[i].startTime = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
              let t = new Date(res.data.data.list[i].endTime);
              res.data.data.list[i].endTime = t.getFullYear() + '-' + t.getMonth() + '-' + t.getDate();
            }
            this.tableDate = res.data.data.list;
            this.pages = res.data.data.pages;
          })
          .catch(res => {

          });
      },
      handleCurrentChange(val) {
        this.acquireDate(val);
      },
      selectRow(index, rows) {
        this.axios.get('/api/stu/chooseCou', {
          params: {
            couId: rows[index].id,
          }
        })
          .then(res => {
            this.$message({
                showClose: true,
                message: res.data.message,
                type: 'success'
              });
            this.acquireDate(this.currentPage);  
          })
          .catch(res => {

          })
      }
    },
    data() {
      return {
        tableDate: [],
        currentPage: 1,
        pages: 1,
        selectStatus: 0,
      }
    }
  }
</script>