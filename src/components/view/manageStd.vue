<template>
  <div>
    <div class="title">
      <p>学生管理</p>
      <div>
        <el-button class="addButton" type="primary" v-popover:popover4>添加学生</el-button>
        <el-popover ref="popover4" placement="right" width="400" trigger="click">
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
        </el-popover>
      </div>
    </div>
    <el-table
      :data="tableDate"
      border
      style="width: 100%">
      <el-table-column
        prop="number"
        label="学生账号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="学生姓名">
      </el-table-column>
      <el-table-column
        prop="academy"
        label="学生学院">
      </el-table-column>
      <el-table-column
        prop="email"
        label="学生邮箱">
      </el-table-column>
      <el-table-column
        label="操作">
        <template scope="scope">
          <el-button
            @click.native.prevent="handleDelete(scope.$index, tableDate)"
            type="text"
            size="small">
            删除该学生
          </el-button>
          <el-button @click.native.prevent="handleEdit(scope.$index, tableDate)"
            type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>
<style scoped>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
<script>
  export default {
    created() {
      this.acquireDate();
    },
    methods: {
      acquireDate() {
        this.axios({
          url: '',
          method: 'get',
          baseURL: '',
        })
        .then(res => {
          // let data = res.data;
        })
        .catch(res => {

        })
        let data = [{
          number: '0313303',
          name: '王小虎',
          academy: '通信与信息工程学院',
          email: '153@456.com'
        }, {
          number: '0313302',
          name: '王小虎',
          academy: '通信与信息工程学院',
          email: '153@456.com'
        }, {
          number: '0313304',
          name: '王小虎',
          academy: '通信与信息工程学院',
          email: '153@456.com'
        }, {
          number: '0313301',
          name: '王小虎',
          academy: '通信与信息工程学院',
          email: '153@456.com'
        }, {
          number: '0313308',
          name: '王小虎',
          academy: '通信与信息工程学院',
          email: '153@456.com'
        }, {
          number: '0313306',
          name: '王小虎',
          academy: '通信与信息工程学院',
          email: '153@456.com'
        }, {
          number: '0313307',
          name: '王小虎',
          academy: '通信与信息工程学院',
          email: 'asda@111.com'
        }]
        this.tableDate = data;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        // rows.splice(index, 1);
      },
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
          } else {
            console.log('error');
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
        ruleForm: {
          number: '',
          resource: '',
          pw: '',
        },
        tableDate : []
      }
    }
  }
</script>