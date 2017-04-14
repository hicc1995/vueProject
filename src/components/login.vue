<template>
<div id="loginForm">
<el-card class="box-card">
<h5>登录
</h5>
  <el-form ref="ruleForm" :model="ruleForm" label-width="60px">
    <el-form-item label="账号" prop="number" :rules="{ required: true, message: '账号不能为空', trigger: 'blur'}">
      <el-input v-model.trim="ruleForm.number" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password" :rules="{ required: true, message: '密码不能为空', trigger: 'blur'}">
      <el-input v-model.trim="ruleForm.password" type="password"></el-input>
    </el-form-item>
    <el-form-item label="身份" prop="resource" :rules="{ required: true, message: '身份不能为空', trigger: 'blur'}">
      <el-radio-group v-model.trim="ruleForm.resource">
        <el-radio label="0">学生</el-radio>
        <el-radio label="1">教师</el-radio>
        <el-radio label="2">管理员</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">点击登录</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</el-card>
</div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        number: '',
        resource: '',
        password: '',
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid)=>{
        if(valid){
          console.log(this.ruleForm);
          // let data = this.ruleForm;
          // this.$router.push({ path: '/std/allCourse'})
          this.axios({
            url: '/api/user/login',
            method: 'post',
            data: this.ruleForm
          })
          .then(res => {
            console.log(res.data);
            if(res.data.code == 0){
              if(this.ruleForm.resource == 0){
                this.$router.push({ path: '/std/allCourse'})
              }else if(this.ruleForm.resource == 2){
                this.$router.push({ path: '/admin/manageStd'})
              }else{
                this.$router.push({ path: '/teach/coursePlan'})
              }
            }else{
              this.$message({
                  message: res.data.message,
                  type: 'error'
                });
            }
            
          })
          .catch(res => {
            console.log(res.data);
          })
        }else{
          return false;
        }
      })
    },
    resetForm(fromName) {
      this.$refs[fromName].resetFields();
    }
  }
}
</script>