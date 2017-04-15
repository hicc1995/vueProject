<template>
  <div>
    <div class="title">
      <p>课程管理</p>
    </div>
    <label>课程状态:</label>
    <el-select v-model="selectStatus" placeholder="请选择">
      <el-option label="待审核" :value="0"></el-option>
      <el-option label="不通过" :value="2"></el-option>
      <el-option label="通过" :value="1"></el-option>
    </el-select>
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
  label{
    color: #48576a;
    padding: 0 10px 0 20px;
  }
</style>
<script>
  export default {
    created() {
      console.log(this.selectStatus)
      this.acquireDate(1,this.selectStatus);
    },
    methods: {
      acquireDate(pageNum, selectStatus) {
        this.axios.get('/api/admin/courPlanList',{
          params: {
            pageNum: pageNum, //第几页
            pageSize: 10,  //每页数据(默认10条)
            status: selectStatus,  //课程状态(默认未审核)
          }
        })
          .then(res => {
            if(res.data.code == 403){
              this.$router.push({ path: '/'})
            }
            for(let i = 0 ; i < res.data.data.list.length ;i++){
              if(res.data.data.list[i].status == 0){
                res.data.data.list[i].status = '待审核';
              }else if(res.data.data.list[i].status == 1){
                res.data.data.list[i].status = '通过';
              }else{
                res.data.data.list[i].status = '不通过';
              }
              let d = new Date(res.data.data.list[i].startTime);
              res.data.data.list[i].startTime = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();
              let t = new Date(res.data.data.list[i].endTime);
              res.data.data.list[i].endTime = t.getFullYear()+'-'+t.getMonth()+'-'+t.getDate();
            }
            this.tableDate = res.data.data.list;
            this.pages = res.data.data.pages
          })
          .catch(res => {

          })
      },
      handleCurrentChange(val) {
        this.acquireDate(val, this.selectStatus)
      },
      passRow(index, rows) {
        console.log(rows[index].id);
        if (rows[index].tag !== '通过') {
          this.axios.post('/api/admin/auditCourPlan', {
            id: rows[index].id,
            status: '1'
          })
            .then(res => {
              this.$message({
                showClose: true,
                message: res.data.message,
                type: 'success'
              });
              rows[index].tag = '通过';
              this.acquireDate(this.currentPage, this.selectStatus);
            })
            .catch(res => {});
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
          console.log(rows[index].tag);
          this.axios.post('/api/admin/auditCourPlan', {
            id: rows[index].id,
            status: '2'
          })
            .then(res => {
              rows[index].tag = '不通过';
              this.$message({
                showClose: true,
                message: '操作成功',
                type: 'success'
              });
              this.acquireDate(this.currentPage, this.selectStatus);
            })
            .catch(res => {
              // console.log(response);
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
    watch: {
      selectStatus: function(val, oldval){
        console.log(val);
        this.acquireDate(this.currentPage, this.selectStatus);
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