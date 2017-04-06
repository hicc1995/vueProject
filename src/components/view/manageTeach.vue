<template>
  <div>
    <div class="title">
      <p>教师管理</p>
      <el-button class="addButton" type="primary">添加教师</el-button>
    </div>
    <el-table
      :data="tableDate"
      border
      style="width: 100%">
      <el-table-column
        prop="number"
        label="教师账号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="教师姓名">
      </el-table-column>
      <el-table-column
        prop="academy"
        label="教师学院">
      </el-table-column>
      <el-table-column
        prop="email"
        label="教师邮箱">
      </el-table-column>
      <el-table-column
        label="操作">
        <template scope="scope">
          <el-button
            @click.native.prevent="selectRow(scope.$index, tableDate)"
            type="text"
            size="small">
            删除该教师
          </el-button>
        </template>
      </el-table-column>
    </el-table>
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
      this.acquireDate();
    },
    methods: {
      acquireDate() {
        this.axios({
          url: '',
          method: 'get',
          baseURL: '',
        })
        .then(res => {
          // let data = res.data;
        })
        .catch(res => {

        })
        let data = [{
          number: '0313303',
          name: '王小虎',
          academy: '通信与信息工程学院',
          email: '153@456.com'
        }, {
          number: '0313302',
          name: '王小虎',
          academy: '通信与信息工程学院',
          email: '153@456.com'
        }, {
          number: '0313304',
          name: '王小虎',
          academy: '通信与信息工程学院',
          email: '153@456.com'
        }, {
          number: '0313301',
          name: '王小虎',
          academy: '通信与信息工程学院',
          email: '153@456.com'
        }, {
          number: '0313308',
          name: '王小虎',
          academy: '通信与信息工程学院',
          email: '153@456.com'
        }, {
          number: '0313306',
          name: '王小虎',
          academy: '通信与信息工程学院',
          email: '153@456.com'
        }, {
          number: '0313307',
          name: '王小虎',
          academy: '通信与信息工程学院',
          email: 'asda@111.com'
        }]
        this.tableDate = data;
      },
      selectRow(index, rows) {
        //向后台发送删除该教师信息
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableDate : []
      }
    }
  }
</script>