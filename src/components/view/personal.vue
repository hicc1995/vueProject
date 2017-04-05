<template>
	<div>
		<el-row>
			<el-col :span="11" :offset="1">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
					  <span style="line-height: 36px;">订阅信息</span>
					</div>
					<p>订阅成绩</p>
					<el-switch
						v-model="value1"
						on-color="#13ce66"
						off-color="#ff4949">
					</el-switch>
					<p>订阅通知</p>
					<el-switch
					  v-model="value2"
					  on-color="#13ce66"
					  off-color="#ff4949">
					</el-switch>
				</el-card>
			</el-col>
			<el-col :span="11">
				<el-card class="box-card">
				<h5>修改密码</h5>
					<el-form ref="form" :model="form" :rules="rules" label-width="80px">
						<el-form-item label="学号" prop="number">
						  <el-input v-model.trim="form.number" prop="number"></el-input>
						</el-form-item>
						<el-form-item label="原始密码" prop="pw">
						  <el-input v-model.trim="form.pw" type="password"></el-input>
						</el-form-item>
						<el-form-item label="新密码" prop="pw2">
						  <el-input v-model.trim="form.pw2" type="password"></el-input>
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
			var validateNumber = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入学号'));
				}
				callback();
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
			return {
				value1: false,
				value2: false,
				form: {
					number: '',
					pw: '',
					pw2: '',
				},
				rules: {
					pw: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					number: [{
						validator: validateNumber,
						trigger: 'blur'
					}],
					pw2: [{
						validator: validatePass2,
						trigger: 'blur'
					}]
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
			},
			submitEmail(newValue) {
				if(newValue == true){
					this.$prompt('请输入邮箱', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						inputPattern: /[\w!#$%&*+/=?^_`{|}~-]+(?:\.[\w!#$%&*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
						inputErrorMessage: '邮箱格式不正确'
					}).then(({
						value
					}) => {
						this.$message({
							type: 'success',
							message: '你的邮箱是: ' + value
						});
					}).catch(() => {
						this.$message({
							type: 'info',
							message: '取消输入'
						});
					});
				}
			}
		},
		watch: {
			value1: function(newValue, old){
				console.log(newValue,old);
				this.submitEmail(newValue);
			},
			value2: function(newValue, old){
				console.log(newValue, old);
				this.submitEmail(newValue);
			}
		}
	}
</script>