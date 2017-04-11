<template>
  <div>
    <div class="title">
      <p>教师管理</p>
      <div>
        <el-dialog title="教师管理" v-model="dialogFormVisible">
          <el-form ref="ruleForm" :model="ruleForm" label-width="85px">
            <el-form-item label="教师账号" prop="teaNumber" :rules="{ required: true, message: '账号不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.teaNumber" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="教师姓名" prop="teaName" :rules="{ required: true, message: '姓名不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.teaName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="教师学院" prop="college" :rules="{ required: true, message: '学院不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.college" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="phone" :rules="{ required: true, message: '电话不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <el-button class="addButton" @click.native.prevent="addBtn()" type="primary">添加教师</el-button>
      </div>
    </div>
    <el-table :data="tableDate" border style="width: 100%">
      <el-table-column prop="teaNumber" label="教师账号">
      </el-table-column>
      <el-table-column prop="teaName" label="教师姓名">
      </el-table-column>
      <el-table-column prop="college" label="教师学院">
      </el-table-column>
      <el-table-column prop="email" label="教师邮箱">
      </el-table-column>
      <el-table-column prop="phone" label="电话">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button @click.native.prevent="selectRow(scope.$index, tableDate)" type="text" size="small">
            删除该教师
          </el-button>
          <!--<el-popover ref="popover" placement="right" width="400" trigger="click">
          <el-form ref="ruleForm" :model="ruleForm" label-width="85px">
            <el-form-item label="教师账号" prop="teaNumber" :rules="{ required: true, message: '账号不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.teaNumber" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="教师姓名" prop="teaName" :rules="{ required: true, message: '姓名不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.teaName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="教师学院" prop="college" :rules="{ required: true, message: '学院不能为空', trigger: 'blur'}">
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
          teaNumber: '0313303',
          teaName: '王小虎',
          college: '通信与信息工程学院',
          phone: '15332426197',
          email: '153@456.com'
        }, {
          teaNumber: '0313302',
          teaName: '王小虎',
          college: '通信与信息工程学院',
          phone: '15332426197',
          email: '153@456.com'
        }, {
          teaNumber: '0313304',
          teaName: '王小虎',
          college: '通信与信息工程学院',
          phone: '15332426197',
          email: '153@456.com'
        }, {
          teaNumber: '0313301',
          teaName: '王小虎',
          college: '通信与信息工程学院',
          phone: '15332426197',
          email: '153@456.com'
        }, {
          teaNumber: '0313308',
          teaName: '王小虎',
          college: '通信与信息工程学院',
          phone: '15332426197',
          email: '153@456.com'
        }, {
          teaNumber: '0313306',
          teaName: '王小虎',
          college: '通信与信息工程学院',
          phone: '15332426197',
          email: '153@456.com'
        }, {
          teaNumber: '0313307',
          teaName: '王小虎',
          college: '通信与信息工程学院',
          phone: '15332426197',
          email: 'asda@111.com'
        }]
        this.tableDate = data;
      },
      handleEdit(index, row) {
        this.ruleForm.teaNumber = row[index].teaNumber;
        this.ruleForm.college = row[index].college;
        this.ruleForm.teaName = row[index].teaName;
        this.ruleForm.phone = row[index].phone;
        this.dialogFormVisible = true;
      },
      addBtn() {
        this.ruleForm = {
          teaNumber: '',
          college: '',
          teaName: '',
          phone: '',
        };
        this.dialogFormVisible = true;
      },
      submitForm(formName, index, row) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('yes');
            console.log(index);
            let data = this.ruleForm;
            this.axios({
              url: '/addTea',
              method: 'post',
              baseURL: '/api/admin',
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
      resetForm(fromteaName) {
        this.$refs[fromteaName].resetFields();
      },
      selectRow(index, rows) {
        //向后台发送删除该教师信息
        this.axios.get('/api/admin/delTea?ID=12345')
        .then(res => {
          console.log(response);
          this.$message({
                  message: '删除教师成功',
                  type: 'success'
                });
          rows.splice(index, 1);
        })
        .catch(res => {
          this.$message({
                  message: '删除教师失败',
                  type: 'error'
                });
          console.log(response);
        });
      }
    },
    data() {
      return {
        ruleForm: {
          teaNumber: '',
          college: '',
          teaName: '',
          phone: '',
        },
        tableDate: [],
        dialogFormVisible: false
      }
    }
  }
</script>