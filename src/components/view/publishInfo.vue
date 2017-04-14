<template>
  <div>
    <div class="title"><p>信息发布</p></div>
    <el-form ref="ruleForm" :model="ruleForm" label-width="80px">
      <el-form-item label="标题" prop="title" :rules="{ required: true, message: '标题不能为空', trigger: 'blur'}">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="类别" prop="type" :rules="{ required: true, message: '类别不能为空', trigger: 'blur'}">
        <el-select v-model="ruleForm.type" placeholder="请选择类别">
          <el-option label="就业信息" value="0"></el-option>
          <el-option label="通知通告" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容" prop="content" :rules="{ required: true, message: '内容不能为空', trigger: 'blur'}">
        <el-input type="textarea" v-model.trim="ruleForm.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          title: '',
          type: '',
          content: ''
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('yes');
            console.log(this.ruleForm);
            this.axios({
                url: '/api/message/creatMessage',
                method: 'post',
                data: this.ruleForm
              })
              .then(res => {
                console.log(res.data);
                console.log(res.status);
                this.$message({
                  type: 'success',
                  message: '发布成功'
                });
              })
              .catch(res => {
                console.log(res.data);
              })
          } else {
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