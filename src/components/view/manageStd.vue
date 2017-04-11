<template>
  <div>
    <div class="title">
      <p>学生管理</p>
      <div>
        <el-dialog title="学生管理" v-model="dialogFormVisible">
          <el-form ref="ruleForm" :model="ruleForm" label-width="85px">
            <el-form-item label="学生账号" prop="stuNumber" :rules="{ required: true, message: '账号不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.stuNumber" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="学生姓名" prop="stuName" :rules="{ required: true, message: '姓名不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.stuName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="学生学院" prop="college" :rules="{ required: true, message: '学院不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.college" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="班级" prop="classGrade" :rules="{ required: true, message: '班级不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.classGrade"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <el-button class="addButton" @click.native.prevent="addBtn()" type="primary">添加学生</el-button>
      </div>
    </div>
    <el-table :data="tableDate" border style="width: 100%">
<el-table-column prop="stuNumber" label="学生账号">
</el-table-column>
<el-table-column prop="stuName" label="学生姓名">
</el-table-column>
<el-table-column prop="college" label="学生学院">
</el-table-column>
<el-table-column prop="classGrade" label="学生班级">
</el-table-column>
<el-table-column prop="email" label="学生邮箱">
</el-table-column>
<el-table-column label="操作">
  <template scope="scope">
    <el-button @click.native.prevent="handleDelete(scope.$index, tableDate)" type="text" size="small">
      删除该学生
    </el-button>
    <!--<el-popover ref="popover" placement="right" width="400" trigger="click">
          <el-form ref="ruleForm" :model="ruleForm" label-width="85px">
            <el-form-item label="学生账号" prop="stuNumber" :rules="{ required: true, message: '账号不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.stuNumber" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="学生姓名" prop="stuName" :rules="{ required: true, message: '姓名不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.stuName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="学生学院" prop="college" :rules="{ required: true, message: '学院不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.college" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm', scope.$index, tableDate)">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-popover>-->
    <el-button @click.native.prevent="handleEdit(scope.$index, tableDate)" type="text" size="small">编辑</el-button>
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
          stuNumber: '0313303',
          stuName: '王小虎',
          college: '通信与信息工程学院',
          classGrade: '2',
          email: '153@456.com'
        }, {
          stuNumber: '0313302',
          stuName: '王小虎',
          college: '通信与信息工程学院',
          classGrade: '2',
          email: '153@456.com'
        }, {
          stuNumber: '0313304',
          stuName: '王小虎',
          college: '通信与信息工程学院',
          classGrade: '2',
          email: '153@456.com'
        }, {
          stuNumber: '0313301',
          stuName: '王小虎',
          college: '通信与信息工程学院',
          classGrade: '2',
          email: '153@456.com'
        }, {
          stuNumber: '0313308',
          stuName: '王小虎',
          college: '通信与信息工程学院',
          classGrade: '2',
          email: '153@456.com'
        }, {
          stuNumber: '0313306',
          stuName: '王小虎',
          college: '通信与信息工程学院',
          classGrade: '2',
          email: '153@456.com'
        }, {
          stuNumber: '0313307',
          stuName: '王小虎',
          college: '通信与信息工程学院',
          classGrade: '2',
          email: 'asda@111.com'
        }]
        this.tableDate = data;
      },
      addBtn() {
        this.ruleForm = {
          stuNumber: '',
          college: '',
          stuName: '',
          classGrade: '',
        };
        this.dialogFormVisible = true;
      },
      handleEdit(index, row) {
        console.log(index, row);
        this.ruleForm.stuNumber = row[index].stuNumber;
        this.ruleForm.college = row[index].college;
        this.ruleForm.stuName = row[index].stuName;
        this.dialogFormVisible = true;
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.axios.get('/api/admin/delStu?ID=12345')
          .then(res => {
            // let data = res.data;
            this.$message({
                  message: '删除学生成功',
                  type: 'success'
                });
            rows.splice(index, 1);
          })
          .catch(res => {
            this.$message({
                  message: '删除学生失败',
                  type: 'error'
                });
          });
      },
      submitForm(formName, index, row) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('yes');
            console.log(index);
            let data = this.ruleForm;
            this.axios({
              url: '/addStu',
              baseURL: '/api/admin',
              method: 'post',
              data: this.ruleForm
            })
              .then(res => {
                console.log(res.data);
                console.log(res.status);
                console.log(res.statusText);
                console.log(res.headers);
                console.log(res.config);
                this.$message({
                  message: '新增成功',
                  type: 'success'
                });
                this.dialogFormVisible = false;
                //刷新表格
                this.acquireDate();
                // 带查询参数，变成 /register?plan=private
                // router.push({ path: '/std/allCourse', query: { plan: 'private' }})
              })
              .catch(res => {
                console.log(res.data);
                console.log(res.status);
                this.$message({
                  message: '新增失败',
                  type: 'error'
                });
                this.dialogFormVisible = false;
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
          stuNumber: '',
          college: '',
          stuName: '',
          classGrade: '',
        },
        tableDate: [],
        dialogFormVisible: false
      }
    }
  }
</script>