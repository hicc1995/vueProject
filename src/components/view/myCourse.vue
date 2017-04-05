<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="className"
      label="课程名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="teacher"
      label="教师">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    created() {
      this.acquireData();
    },
    methods: {
      acquireData() {
        let data = [{
          date: '2016-05-02',
          className: '地理',
          address: '上海市普陀区金沙江路 1518 弄',
          teacher: 'cc'
        }, {
          date: '2016-05-04',
          className: '数学',
          address: '上海市普陀区金沙江路 1517 弄',
          teacher: 'cc'
        }, {
          date: '2016-05-01',
          className: '英语',
          address: '上海市普陀区金沙江路 1519 弄',
          teacher: 'cc'
        }, {
          date: '2016-05-03',
          className: '体育',
          address: '上海市普陀区金沙江路 1516 弄',
          teacher: 'cc'
        }];
        this.tableData = data;
      }
    },
    data() {
      return {
        tableData : []
      }
    }
  }
</script>