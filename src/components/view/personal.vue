<template>
	<div>
		<el-row>
			<el-col :span="11" :offset="1">
				<el-card class="box-card"></el-card>
			</el-col>
			<el-col :span="11">
				<el-card class="box-card">
				<h5>修改密码</h5>
					<el-form ref="form" :model="form" :rules="rules" label-width="80px">
						<el-form-item label="姓名" prop="name">
						  <el-input v-model.trim="form.name" prop="name"></el-input>
						</el-form-item>
						<el-form-item label="原始密码" prop="pw">
						  <el-input v-model.trim="form.pw"></el-input>
						</el-form-item>
						<el-form-item label="新密码" prop="pw2">
						  <el-input v-model.trim="form.pw2"></el-input>
						</el-form-item>
						<el-form-item>
						  <el-button type="primary" @click="submitForm('form')">提交</el-button>
						  <el-button @click="resetForm('form')">重置</el-button>
						</el-form-item>
					</el-form>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default{
	data() {
		var validateName = (rule, value, callback) => {
		  if (value === '') {
		    callback(new Error('请输入姓名'));
		  } 
		}
		var validatePass = (rule, value, callback) => {
		  if (value === '') {
		    callback(new Error('请输入密码'));
		  } else {
		    if (this.form.pw2 !== '') {
		      this.$refs.form.validateField('pw2');
		    }
		    callback();
		  }
		};
		var validatePass2 = (rule, value, callback) => {
		  if (value === '') {
		    callback(new Error('请再次输入密码'));
		  } else if (value === this.form.pw) {
		    callback(new Error('两次输入密码一致!'));
		  } else {
		    callback();
		  }
		};
		return{
			form: {
			  name: '',
			  pw: '',
			  pw2: '',
			},
			rules: {
			  pw: [
			    {validator: validatePass, trigger: 'blur'}
			  ],
			  name: [
			    {validator: validateName, trigger: 'blur'}
			  ],
			  pw2: [
			    {validator: validatePass2, trigger: 'blur'}
			  ]
			}
		}
	},
		methods: {
			submitForm(form) {
				this.$refs[form].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(form) {
				this.$refs[form].resetFields();
			}
		}
	}
</script>