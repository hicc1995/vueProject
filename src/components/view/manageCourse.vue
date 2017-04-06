<template>
  <el-table
    :data="tableDate"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期">
    </el-table-column>
    <el-table-column
      prop="courseName"
      label="课程名称">
    </el-table-column>
    <el-table-column
      prop="teachName"
      label="教师名称">
    </el-table-column>
    <el-table-column
      prop="address"
      label="教室">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="标签"
      :filters="[{ text: '通过', value: '通过' }, { text: '不通过', value: '不通过' }]"
      :filter-method="filterTag">
      <template scope="scope">
        <el-tag
          :type="scope.row.tag === '通过' ? 'primary' : 'success'"
          close-transition>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      label="操作">
      <template scope="scope">
        <el-button
          @click.native.prevent="selectRow(scope.$index, tableDate)"
          type="text"
          size="small">
          通过该课程
        </el-button>
      </template>
    </el-table-column>
  </el-table>
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
          date: '2016-05-03',
          teachName: '王小虎',
          courseName: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '通过'
        }, {
          date: '2016-05-02',
          teachName: '王小虎',
          courseName: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '通过'
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
          tag: '通过'
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
          tag: '不通过'
        }]
        this.tableDate = data;
      },
      selectRow(index, rows) {
        // rows.splice(index, 1);
        if(rows[index].tag !== '通过'){
          rows[index].tag = '通过';
          console.log(rows[index].tag);
          // axios({

          // })
        }else{
          this.$message({
            showClose: true,
            message: '已通过该课程',
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
        tableDate : []
      }
    }
  }
</script>