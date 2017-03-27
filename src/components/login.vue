<template>
<div id="loginForm">
<el-card class="box-card">
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model.trim="form.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model.trim="form.pw"></el-input>
    </el-form-item>
    <el-form-item label="身份">
      <el-radio-group v-model.trim="form.resource">
        <el-radio label="0">学生</el-radio>
        <el-radio label="1">教师</el-radio>
        <el-radio label="2">管理员</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">点击登录</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</el-card>
</div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        resource: '',
        pw: '',
      }
    }
  },
  methods: {
    onSubmit() {
      if(this.form.name&&this.form.pw&&this.form.resource){
        var regex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}');
        if(!regex.test(this.form.pw)){
          this.$message({
            message: '警告哦，密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符',
            type: 'warning',
            duration: 3000,
            showClose: true
          });
        }else{
          console.log(this.form);
          
        }
      }else{
        this.$message({
          message: '警告哦，所有输入都不能为空',
          type: 'warning',
          duration: 1000,
          showClose: true
        });
      }
      
    },
    cancel() {
      this.form.name = '';
      this.form.pw = '';
      this.form.resource = '';
    }
  }
}
</script>