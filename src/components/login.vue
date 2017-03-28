<template>
<div id="loginForm">
<el-card class="box-card">
<h5>登录
</h5>
  <el-form ref="form" :model="form" :rules="rules" label-width="80px">
    <el-form-item label="姓名" prop="name">
      <el-input v-model.trim="form.name" prop="name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pw">
      <el-input v-model.trim="form.pw"></el-input>
    </el-form-item>
    <el-form-item label="身份" prop="resource">
      <el-radio-group v-model.trim="form.resource">
        <el-radio label="0">学生</el-radio>
        <el-radio label="1">教师</el-radio>
        <el-radio label="2">管理员</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">点击登录</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</el-card>
</div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if(!value){
        callback(new Error('请输入密码'))
      }else{
        var regex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}');
        if(!regex.test(value)){
          callback(new Error('密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符'));
        }
      }
    };
    var validateName = (rule, value, callback) =>{
      if(!value){
        callback(new Error('姓名不能为空'))
      }
    }
    var validateRes = (rule, value, callback) => {
      if(!value){
        callback(new Error('身份不能为空'))
      }
    }
    return {
      form: {
        name: '',
        resource: '',
        pw: '',
      },
      rules: {
        pw: [
          {validator: validatePass, trigger: 'blur'}
        ],
        name: [
          {validator: validateName, trigger: 'blur'}
        ],
        resource: [
          {validator: validateRes, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate((valid)=>{
        if(valid){
          console.log('yes');
        }else{
          console.log('error');
          return false;
        }
      })
    },
    cancel() {
      this.form.name = '';
      this.form.pw = '';
      this.form.resource = '';
    }
  }
}
</script>