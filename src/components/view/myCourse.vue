<template>
  <div>
    <div class="title">
      <p>已选课程</p>
    </div>
    <el-table :data="tableData" style="width: 100%">
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
</el-table>
<el-pagination layout="prev, pager, next" :total="pages" :current-page="currentPage" @current-change="handleCurrentChange">
</el-pagination>
</div>
</template>

<script>
  export default {
    created() {
      this.acquireData(1);
    },
    methods: {
      acquireData(pageNum) {
        this.axios.get('/api/stu/myCouList', {
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
            this.tableData = res.data.data.list;
            this.pages = res.data.data.pages;
          })
          .catch(res => {

          });
      },
      handleCurrentChange(val) {
        this.acquireDate(val);
      },

    },
    data() {
      return {
        tableData: [],
        currentPage: 1,
        pages: 1,
        selectStatus: 0,
      }
    }
  }
</script>