<template>
  <el-row>
    <div class="title">
      <p>课程计划</p>
    </div>
    <el-col :span="16">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="上课时间" width="180">
        </el-table-column>
        <el-table-column prop="name" label="课程名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="上课教室">
        </el-table-column>
        <el-table-column prop="startTime" label="开始时间">
        </el-table-column>
        <el-table-column prop="endTime" label="结束时间">
        </el-table-column>
      </el-table>
</el-col>
<el-col :span="7" :offset="1">
  <el-card class="box-card">
    <h5>新增课程计划</h5>
    <el-form ref="ruleForm" :model="ruleForm">
      <el-form-item label="课程名称" prop="name" :rules="{ required: true, message: '课程名不能为空', trigger: 'blur'}">
        <el-input v-model.trim="ruleForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="课程教室" prop="adress" :rules="{ required: true, message: '课程教室不能为空', trigger: 'blur'}">
        <el-input v-model.trim="ruleForm.adress"></el-input>
      </el-form-item>
      <el-form-item label="上课时间" prop="date" :rules="{ required: true, message: '上课时间不能为空', trigger: 'blur'}">
        <el-input v-model.trim="ruleForm.date" placeholder="每周一第四节课"></el-input>
      </el-form-item>
      <el-form-item label="开始时间" prop="startTime">
        <el-date-picker v-model="ruleForm.startTime" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间" prop="endTime">
        <el-date-picker v-model="ruleForm.endTime" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">点击提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</el-col>
</el-row>
</template>

<script>
  export default {
    created() {
      this.acquireData(1);
    },
    data() {
      return {
        tableData: [],
        ruleForm: {
          name: '',
          adress: '',
          date: '',
          startTime: '',
          endTime: ''
        }
      }
    },
    methods: {
      acquireData() {
        let data = [{
          date: '每周一第二节课',
          name: '数字信号处理',
          address: 'A栋教学楼302',
          startTime: 1491401625000,
          endTime: 1491401625000,
        }, {
          date: '每周一第一节课',
          name: '微机原理',
          address: 'A栋教学楼302',
          startTime: 1491401625000,
          endTime: 1491401625000,
        }, {
          date: '每周一第三节课',
          name: '数理方程',
          address: 'A栋教学楼302 1519 弄',
          startTime: 1491401625000,
          endTime: 1491401625000,
        }, {
          date: '每周一第四节课',
          name: '英语',
          address: 'A栋教学楼302',
          startTime: 1491401625000,
          endTime: 1491401625000,
        }];
        this.tableData = data;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
            this.axios({
              url: '',
              method: 'post',
              data: this.ruleForm
            })
              .then(res => {
                console.log(res.data);
                
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