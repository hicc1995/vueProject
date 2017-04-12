<template>
  <div>
    <div class="title">
      <p>课程管理</p>
    </div>
    <el-table :data="tableDate" border style="width: 100%">
<el-table-column prop="date" label="上课时间">
</el-table-column>
<el-table-column prop="couName" label="课程名称">
</el-table-column>
<el-table-column prop="taeName" label="教师名称">
</el-table-column>
<el-table-column prop="college" label="学院">
</el-table-column>
<el-table-column prop="status" label="状态">
</el-table-column>
<el-table-column label="操作">
  <template scope="scope">
    <el-button @click.native.prevent="passRow(scope.$index, tableDate)" type="text" size="small">
      通过该课程
    </el-button>
    <el-button @click.native.prevent="selectRow(scope.$index, tableDate)" type="text" size="small">
      否决该课程
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
  .el-pagination {
    padding: 0;
  }
</style>
<script>
  export default {
    created() {
      this.acquireDate(1);
    },
    methods: {
      acquireDate(pageNum, status) {
        let data = [];
        this.axios.get('/api/admin/courPlanList',{
          params: {
            pageNum: pageNum, //第几页
            pageSize: 10,  //每页数据(默认10条)
            // status: status,  //课程状态(默认未审核)
          }
        })
          .then(res => {
            // let data = res.data;
            for(let i = 0 ; i < res.data.data.list.length ;i++){
              if(res.data.data.list[i].status == 0){
                res.data.data.list[i].status = '待审核';
              }else if(res.data.data.list[i].status == 1){
                res.data.data.list[i].status = '通过';
              }else{
                res.data.data.list[i].status = '不通过';
              }
            }
            this.tableDate = res.data.data.list;
            this.pages = res.data.data.pages;
            console,log(this.tableDate)
          })
          .catch(res => {

          })
      },
      handleCurrentChange(val) {
        // this.currentPage = val;
        let currentPage = val;
        console.log('当前页: '+currentPage);
        this.acquireDate(val);
      },
      passRow(index, rows) {
        console.log(rows[index].id);
        if (rows[index].tag !== '通过') {
          this.axios.post('/api/admin/auditCourPlan', {
            id: rows[index].id,
            status: '1'
          })
            .then(function (response) {
              console.log(response);
              rows[index].tag = '通过';
            })
            .catch(function (response) {
              console.log(response);
            });
        } else {
          this.$message({
            showClose: true,
            message: '已通过该课程',
            type: 'warning'
          });
        }
      },
      selectRow(index, rows) {
        if (rows[index].tag !== '不通过') {
          rows[index].tag = '不通过';
          console.log(rows[index].tag);
          this.axios.post('/api/admin/auditCourPlan', {
            id: rows[index].id,
            status: '2'
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (response) {
              console.log(response);
            });
        } else {
          this.$message({
            showClose: true,
            message: '已否决该课程',
            type: 'warning'
          });
        }
      }
    },
    data() {
      return {
        tableDate: [],
        currentPage: 1,
        pages: 1,
      }
    }
  }
</script>