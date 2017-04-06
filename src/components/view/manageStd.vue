<template>
  <div>
    <div class="title">
      <p>学生管理</p>
      <el-button class="addButton" type="primary" @click="addStd(scope)">添加学生</el-button>
    </div>
    <el-table
      :data="tableDate"
      border
      style="width: 100%">
      <el-table-column
        prop="number"
        label="学生账号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="学生姓名">
      </el-table-column>
      <el-table-column
        prop="academy"
        label="学生学院">
      </el-table-column>
      <el-table-column
        prop="email"
        label="学生邮箱">
      </el-table-column>
      <el-table-column
        label="操作">
        <template scope="scope">
          <el-button
            @click.native.prevent="handleDelete(scope.$index, tableDate)"
            type="text"
            size="small">
            删除该学生
          </el-button>
          <el-button @click.native.prevent="handleEdit(scope.$index, tableDate)"
            type="text" size="small">编辑</el-button>
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
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        // rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableDate : []
      }
    }
  }
</script>