<template>
  <div>
    <div class="title">
      <p>教师管理</p>
      <div>
        <el-dialog title="教师管理" v-model="dialogFormVisible">
          <el-form ref="ruleForm" :model="ruleForm" label-width="85px">
            <input v-model.trim="ruleForm.id" hidden></input>
            <el-form-item label="教师账号" prop="teaNumber" :rules="{ required: true, message: '账号不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.teaNumber" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="教师姓名" prop="teaName" :rules="{ required: true, message: '姓名不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.teaName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="教师学院" prop="college" :rules="{ required: true, message: '学院不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.college" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="职称" prop="professional">
              <!--<el-input v-model.trim="ruleForm.professional"></el-input>-->
              <el-select v-model="ruleForm.professional" auto-complete="off" placeholder="请选择">
                <el-option label="助教" :value="1"></el-option>
                <el-option label="讲师" :value="2"></el-option>
                <el-option label="教授" :value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="电话" prop="phone" :rules="[{ required: true, message: '电话不能为空', trigger: 'blur'},{ type: 'number', message: '电话必须为数字值', trigger: 'blur'}]">
              <el-input v-model.trim="ruleForm.phone" auto-complete="off" type="phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email" :rules="[{ required: true, message: '邮箱不能为空', trigger: 'blur'},{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }]">
              <el-input v-model.trim="ruleForm.email" type="email"></el-input>
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
      <el-table-column prop="professional" label="职称">
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
        <!--<el-button @click.native.prevent="handleEdit(scope.$index, tableDate)" type="text" size="small">编辑</el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="pages" :current-page="currentPage" @current-change="handleCurrentChange">
    </el-pagination>
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
      this.acquireDate(1);
    },
    methods: {
      acquireDate(pageNum) {
        this.axios.get('api/admin/taeList', {
          params: {
            pageNum: pageNum
          }
        })
          .then(res => {
            if(res.data.code == 403){
              this.$router.push({ path: '/'})
            }
            for(let i = 0 ; i < res.data.data.list.length ;i++){
              if(res.data.data.list[i].professional == 1){
                res.data.data.list[i].professional = '助教';
              }else if(res.data.data.list[i].professional == 2){
                res.data.data.list[i].professional = '讲师';
              }else{
                res.data.data.list[i].professional = '教授';
              }
            }
            this.tableDate = res.data.data.list;
            this.pages = res.data.data.pages;
            console,log(this.tableDate);
          })
          .catch(res => {

          })
      },
      handleCurrentChange(val) {
        this.acquireDate(val);
      },
      handleEdit(index, row) {
        this.ruleForm.teaNumber = row[index].teaNumber;
        this.ruleForm.college = row[index].college;
        this.ruleForm.teaName = row[index].teaName;
        this.ruleForm.phone = row[index].phone;
        this.ruleForm.email = row[index].email;
        this.ruleForm.professional = row[index].professional;
        this.ruleForm.id = row[index].id;
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
            this.axios({
              url: '/addTea',
              method: 'post',
              baseURL: '/api/admin',
              data: this.ruleForm
            })
              .then(res => {
                if(res.data.code == 403){
                  this.$router.push({ path: '/'})
                }
                this.$message({
                  message: '新增成功',
                  type: 'success'
                });
                this.dialogFormVisible = false;
                //刷新表格
                this.acquireDate(this.currentPage);
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
        this.axios.get('/api/admin/delTea',{
          params: {
            id: rows[index].id
          }
        })
        .then(res => {
          if(res.data.code == 403){
              this.$router.push({ path: '/'})
            }
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
          console.log(res);
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
          email: '',
          professional: '',
        },
        tableDate: [],
        dialogFormVisible: false,
        pages: 1,
        currentPage: 1,
      }
    }
  }
</script>