<template>
  <el-row>
    <el-col :span="16">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="上课时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="课程名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="上课教室">
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="7" :offset="1">
      
    </el-col>
  </el-row>
</template>

<script>
  export default {
    created() {
      this.acquireData();
    },
    methods: {
      acquireData() {
        let data = [{
          date: '每周一第二节课',
          name: '数字信号处理',
          address: 'A栋教学楼302'
        }, {
          date: '每周一第一节课',
          name: '微机原理',
          address: 'A栋教学楼302'
        }, {
          date: '每周一第三节课',
          name: '数理方程',
          address: 'A栋教学楼302 1519 弄'
        }, {
          date: '每周一第四节课',
          name: '英语',
          address: 'A栋教学楼302'
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