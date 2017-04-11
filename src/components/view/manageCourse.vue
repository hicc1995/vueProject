<template>
  <div>
    <div class="title">
      <p>课程管理</p>
    </div>
    <el-table :data="tableDate" border style="width: 100%">
<el-table-column prop="date" label="上课时间">
</el-table-column>
<el-table-column prop="courseName" label="课程名称">
</el-table-column>
<el-table-column prop="teachName" label="教师名称">
</el-table-column>
<el-table-column prop="address" label="教室">
</el-table-column>
<el-table-column prop="tag" label="状态" :filters="[{ text: '通过', value: '通过' }, { text: '不通过', value: '不通过' }]" :filter-method="filterTag">
  <template scope="scope">
    <el-tag :type="scope.row.tag === '通过' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}</el-tag>
  </template>
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
<el-pagination layout="prev, pager, next" :total="50" :current-page="currentPage" @current-change="handleCurrentChange">
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
        this.axios.get('/api/admin/courPlanList',{
          params: {
            pageNum: pageNum, //第几页
            pageSize: 10,  //每页数据(默认10条)
            // status: status,  //课程状态(默认未审核)
          }
        })
          .then(res => {
            // let data = res.data;
          })
          .catch(res => {

          })
        let data = [{
          date: '周五第四节',
          teachName: '王小虎',
          courseName: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '通过'
        }, {
          date: '2016-05-02',
          teachName: '王小虎',
          courseName: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '未审核'
        }, {
          date: '2016-05-04',
          teachName: '王小虎',
          courseName: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '通过'
        }, {
          date: '2016-05-01',
          teachName: '王小虎',
          courseName: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '未审核'
        }, {
          date: '2016-05-08',
          teachName: '王小虎',
          courseName: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '不通过'
        }, {
          date: '2016-05-06', 
          teachName: '王小虎',
          courseName: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '不通过'
        }, {
          date: '2016-05-07',
          teachName: '王小虎',
          courseName: '王小虎',
          address: '上海市普陀区金沙江路 00 弄',
          tag: '未审核'
        }]
        this.tableDate = data;
      },
      handleCurrentChange(val) {
        // this.currentPage = val;
        let currentPage = val;
        console.log('当前页: '+currentPage);
        this.acquireDate(val);
      },
      passRow(index, rows) {
        // rows.splice(index, 1);
        if (rows[index].tag !== '通过') {
          rows[index].tag = '通过';
          console.log(rows[index].tag);
          this.axios.post('/api/admin/auditCourPlan', {
            id: 'Fred',
            status: '1'
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
            id: 'Fred',
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
      },
      filterTag(value, row) {
        return row.tag === value;
      }
    },
    data() {
      return {
        tableDate: [],
        currentPage: 1,
      }
    }
  }
</script>