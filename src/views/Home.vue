<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="8"><img src="../assets/logo.png" alt=""></el-col>
          <el-col :span="8"><div class="grid-content center"><h2>恋之家管理系统</h2></div></el-col>
          <el-col :span="8">
            <div class="grid-content right">
              <span>欢迎：Sunshine</span>
              <span @click="logout">退出</span>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return {

    }
  },
  components: {
    
  },
  methods:{
    logout(){
      this.$router.push('/login');
    }
  }
}
</script>
<style lang="scss" scoped>
  .home {
    height: 100%;
    .el-container {
      height: 100%;
      .el-header {
        background-color: #76A2E8;
        line-height: 33.6px;
      }
      .el-aside {
        background-color: #76E8DE;
      }
      .el-main {
        background-color: #B548E8;
      }
    }
  }
  .center{
    text-align: center;
  }
  .right{
    text-align: right;
    span:nth-child(2){
      margin-left:25px;
    }
  }
</style>
