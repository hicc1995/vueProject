<template>
  <div>
    <div class="title"><p>信息发布</p></div>
    <el-form ref="ruleForm" :model="ruleForm" label-width="80px">
      <el-form-item label="标题" prop="name" :rules="{ required: true, message: '标题不能为空', trigger: 'blur'}">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="类别" prop="region" :rules="{ required: true, message: '类别不能为空', trigger: 'blur'}">
        <el-select v-model="ruleForm.region" placeholder="请选择类别">
          <el-option label="就业信息" value="1"></el-option>
          <el-option label="通知通告" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容" prop="desc" :rules="{ required: true, message: '内容不能为空', trigger: 'blur'}">
        <el-input type="textarea" v-model.trim="ruleForm.desc"></el-input>
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
          name: '',
          region: '',
          desc: ''
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
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
                this.$message({
                  type: 'success',
                  message: '发布成功'
                });
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