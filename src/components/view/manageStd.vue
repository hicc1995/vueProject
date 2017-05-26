<template>
  <div>
    <div class="title">
      <p>学生管理</p>
      <div>
        <el-dialog title="学生管理" v-model="dialogFormVisible">
          <el-form ref="ruleForm" :model="ruleForm" label-width="85px">
            <input v-model.trim="ruleForm.id" hidden></input>
            <el-form-item label="学生账号" prop="stuNumber" :rules="{ required: true, message: '账号不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.stuNumber" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="学生姓名" prop="stuName" :rules="{ required: true, message: '姓名不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.stuName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="学生学院" prop="college" :rules="{ required: true, message: '学院不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.college" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="班级" prop="grade" :rules="{ required: true, message: '班级不能为空', trigger: 'blur'}">
              <el-input v-model.trim="ruleForm.grade"></el-input>
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
<el-table-column prop="grade" label="学生班级">
</el-table-column>
<el-table-column prop=" " label="学生邮箱">
</el-table-column>
<el-table-column label="操作">
  <template scope="scope">
    <el-button @click.native.prevent="handleDelete(scope.$index, tableDate)" type="text" size="small">
      删除该学生
    </el-button>
    <!--<el-button @click.native.prevent="handleEdit(scope.$index, tableDate)" type="text" size="small">编辑</el-button>-->
  </template>
</el-table-column>
</el-table>
<el-pagination layout="prev, pager, next" :total="totals" :current-page="currentPage" @current-change="handleCurrentChange">
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
        this.axios.get('/api/admin/stuList',{
          params: {
            pageNum: pageNum, //第几页
            pageSize: 10,  //每页数据(默认10条)
          }
        })
          .then(res => {
            // let data = res.data;
            if(res.data.code == 403){
              this.$router.push({ path: '/'})
            }
            this.tableDate = res.data.data.list;
            this.totals = res.data.data.total;
          })
      },
      handleCurrentChange(val) {
        this.acquireDate(val);
      },
      addBtn() {
        this.ruleForm = {
          stuNumber: '',
          college: '',
          stuName: '',
          grade: '',
        };
        this.dialogFormVisible = true;
      },
      handleEdit(index, row) {
        console.log(index, row);
        this.ruleForm.stuNumber = row[index].stuNumber;
        this.ruleForm.college = row[index].college;
        this.ruleForm.stuName = row[index].stuName;
        this.ruleForm.id = row[index].id;
        this.dialogFormVisible = true;
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.axios.get('/api/admin/delStu', {
          params: {
            id: row[index].id
          }
        })
          .then(res => {
            // let data = res.d ata;
            if(res.data.code == 403){
              this.$router.push({ path: '/'})
            }
            this.$message ({
                  message: '删除学生成功',
                  type: 'success' 
                }); 
            row.splice(index, 1);
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
            console.log(this.ruleForm)
            this.axios({
              url: '/addStu',
              baseURL: '/api/admin',
              method: 'post',
              data: this.ruleForm
            })

              .then(res => {
                console.log(res.data);
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
          grade: '',
        },
        tableDate: [],
        dialogFormVisible: false,
        total: 1,
        currentPage: 1,
      }
    }
  }
</script>