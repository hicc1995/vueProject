<template>
  <div>
    <el-card class="box-card">
    <h5>查询成绩</h5>
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="50px" class="demo-ruleForm">
        <el-form-item label="学号" prop="number">
          <el-input  v-model="ruleForm2.number" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="密码为身份证后六位"></el-input>
        </el-form-item>
        <el-form-item label="学年" prop="year">
          <el-select v-model="ruleForm2.year" auto-complete="off" placeholder="请选择">
            <el-option :label="'2015-2016'" :value="'2015-2016'"></el-option>
            <el-option :label="'2016-2017'" :value="'2016-2017'"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学期" prop="semester">
          <el-select v-model="ruleForm2.semester" auto-complete="off" placeholder="请选择">
            <el-option :label="1" :value="1"></el-option>
            <el-option :label="2" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('学号不能为空'));
        }
        callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        callback();
      };
      var validateYear = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入学年'));
        }
        callback();
      };
      var validateSemester = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入学期'));
        }
        callback();
      };
      return {
        ruleForm2: {
          password: '',
          year: '',
          number: '',
          semester: ''
        },
        rules2: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          year: [
            { validator: validateYear, trigger: 'blur' }
          ],
          number: [
            { validator: checkName, trigger: 'blur' }
          ],
          semester: [
            { validator: validateSemester, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            //www.ccqgq.top/query/api/login
            this.axios({
              url: '/login',
              baseURL: '/query/api',
              method: 'post',
              data: this.ruleForm2
            })
            .then(res => {
              console.log(res.data);
              console.log(res.status);
              console.log(res.statusText);
              console.log(res.headers);
              console.log(res.config);
            })
            .catch(res => {
              console.log(res.data);
              console.log(res.status);
              console.log(res.statusText);
              console.log(res.headers);
              console.log(res.config);
            }) 
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>

</style>
