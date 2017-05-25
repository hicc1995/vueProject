<template>
  <el-row>
    <div class="title">
      <p>课程计划</p>
    </div>
    <el-col :span="16">
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
        <el-table-column prop="status" label="状态">
        </el-table-column>
      </el-table>
</el-col>
<el-col :span="7" :offset="1">
  <el-card class="box-card">
    <h5>新增课程计划</h5>
    <el-form ref="ruleForm" :model="ruleForm">
      <el-form-item label="课程名称" prop="couName" :rules="{ required: true, message: '课程名不能为空', trigger: 'blur'}">
        <el-input v-model.trim="ruleForm.couName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="上课时间" prop="date" :rules="{ required: true, message: '上课时间不能为空', trigger: 'blur'}">
        <el-input v-model.trim="ruleForm.date" placeholder="每周一第四节课"></el-input>
      </el-form-item>
      <el-form-item label="开始时间" prop="startTime">
        <el-date-picker v-model="ruleForm.startTime" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间" prop="endTime">
        <el-date-picker v-model="ruleForm.endTime" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">点击提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</el-col>
</el-row>
</template>
<style>
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
      this.acquireData();
    },
    methods: {
      acquireData() {
        this.axios.get('/api/tea/couList')
          .then(res => {
            if(res.data.code == 403){
              this.$router.push({ path: '/'})
            }
            console.log(res.data.data);
            for(let i = 0 ; i < res.data.data.length ;i++){
              if(res.data.data[i].status == 0){
                res.data.data[i].status = '待审核';
              }else if(res.data.data[i].status == 1){
                res.data.data[i].status = '通过';
              }else{
                res.data.data[i].status = '不通过';
              }
              let d = new Date(res.data.data[i].startTime);
              res.data.data[i].startTime = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
              let t = new Date(res.data.data[i].endTime);
              res.data.data[i].endTime = t.getFullYear()+'-'+(t.getMonth()+1)+'-'+t.getDate();
            }
            this.tableData = res.data.data;
          })
          .catch(res => {
          })
      },
      submitForm(fromName) {
        var _this = this;
        this.$refs[fromName].validate((valid) => {
          if (valid) {
            this.axios({
              url: '/api/tea/addCou',
              method: 'post',
              data: this.ruleForm
            })
              .then(res => {
                 this.$message({
                  showClose: true,
                  message: '提交课程计划成功',
                  type: 'success'
                });
                this.acquireData();
                this.$refs[fromName].resetFields();
              })
              .catch(res => {
                this.acquireData();
                this.$refs[fromName].resetFields();
              })
          } else {
            console.log('error');
                this.acquireData();
                this.$refs[fromName].resetFields();
            return false;
          }
        })
      },
      resetForm(fromName) {
        this.$refs[fromName].resetFields();
      }
    },
    data() {
      return {
        tableData: [],
        ruleForm: {
          couName: '',
          date: '',
          startTime: '',
          endTime: ''
        }
      }
    }
  }
</script>