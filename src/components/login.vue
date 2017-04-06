<template>
<div id="loginForm">
<el-card class="box-card">
<h5>登录
</h5>
  <el-form ref="ruleForm" :model="ruleForm" label-width="80px">
    <el-form-item label="账号" prop="number" :rules="{ required: true, message: '账号不能为空', trigger: 'blur'}">
      <el-input v-model.trim="ruleForm.number" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pw" :rules="{ required: true, message: '密码不能为空', trigger: 'blur'}">
      <el-input v-model.trim="ruleForm.pw" type="password"></el-input>
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
        pw: '',
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid)=>{
        if(valid){
          console.log('yes');
          console.log(this.ruleForm);
          let data = this.ruleForm;
          this.axios({
            url: '/login',
            method: 'post',
            baseURL: '',
            data: {}
          })
          .then(res => {
            console.log(res.data);
            console.log(res.status);
            console.log(res.statusText);
            console.log(res.headers);
            console.log(res.config);
            // 带查询参数，变成 /register?plan=private
            // router.push({ path: '/std/allCourse', query: { plan: 'private' }})
          })
          .catch(res => {
            console.log(res.data);
            console.log(res.status);
            console.log(res.statusText);
            console.log(res.headers);
            console.log(res.config);
          })
        }else{
          console.log('error');
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