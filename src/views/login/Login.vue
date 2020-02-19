<template>
    <div class="login">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
            <h2 class="title">系统管理系统</h2>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name:'login',
        data(){
            return {
                loginForm:{
                    username:"",
                    password:""
                },
                rules:{
                   username:[
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                   ] ,
                   password:[
                       { required: true, message: '请输入密码', trigger: 'blur' }
                   ]
                }
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.axios.post('login',this.loginForm).then(res=>{
                        const {status,data} = res;
                        if(status==201){
                            this.$router.push('/');
                            this.$message({
                                message: '登录成功',
                                type: 'success'
                            });
                        }
                    })
                } else {
                    return false;
                }
                });
            },
        }
    }
</script>

<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100%;
    background-color: #37386B;
    overflow: hidden;
    .title {
        text-align: center;
         color: #ffffff;
         margin-bottom: 100px;
    }
    .el-form {
        width: 500px;
        margin:150px auto;
        .el-button {
            width: 100%;
        }
    }
}
</style>