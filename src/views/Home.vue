
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
        <el-aside width="200px">
           <el-menu
            :router="true"
            :unique-opened="true"
            default-active="1"
            class="el-menu-vertical-demo"
           >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="/users"><i class="el-icon-menu"></i>用户列表</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item index="/privilegeMangement"><i class="el-icon-menu"></i>选项1</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="1-1"><i class="el-icon-menu"></i>选项1</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="1-1"><i class="el-icon-menu"></i>选项1</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
              <el-menu-item index="1-1"><i class="el-icon-menu"></i>选项1</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
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
        background-color: #76A2E8;
      }
      .el-main {
        background-color: #ffffff;
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
