<template>
  <div id="app">
      <el-row :gutter="0" >
        <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6"  @click.native="nav(0)" :class="[nav_index===0 ?'active':'bg-purple']"><div class="grid-content">首页</div></el-col>
        <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6"  @click.native="nav(1)" :class="[nav_index===1 ?'active':'bg-purple-light']"><div class="grid-content">产品</div></el-col>
        <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6" @click.native="nav(2)" :class="[nav_index===2 ?'active':'bg-purple']"><div class="grid-content">信息</div></el-col>
        <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6" @click.native="nav(3)" :class="[nav_index===3 ?'active':'bg-purple-light']"> <div class="grid-content">暂定</div></el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="xs-nav">
            <div class="grid-content xs-grid-content">Cc</div>
            <div class="nav-button">
                <el-dropdown>
                        <el-image
                                class="el-dropdown-link"
                                  :src="url"
                                fit="fit">
                        </el-image>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>产品</el-dropdown-item>
                        <el-dropdown-item>信息</el-dropdown-item>
                        <el-dropdown-item>暂定</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-col>
      </el-row>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </div>
</template>
<script>
  export default {
    name: 'App',
    data(){
      return{
        nav_index:0,
          url:require("./assets/images/nav-button.png")
      }
    },
    methods:{
      nav(e){
        this.nav_index=e
      }
    }
  }
</script>
<style>
  html{
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  .nav{
    width: 100%;
    height: 5rem;
    border: 1px solid red;
    background-color: lightskyblue;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
    border: 1px solid red;

  }
  .bg-purple-light {
    background: #e5e9f2;
    border: 1px solid blue;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 3.125rem;
    line-height: 3.125rem;
    text-align: center;
  }
  .grid-content:hover{
    color: sandybrown;
    cursor: default;
  }
  .active{
    color: sandybrown;
    background-color: lightskyblue;
    font-weight: bold;
    border: 1px solid sandybrown;
  }
    /*小屏导航*/
  .xs-nav{
      background-color: #150c17;
      display: flex;
      justify-content: space-around;
  }
  .xs-grid-content{
      width: 30%;
      color: white;
      text-align: left;
  }
    .nav-button{
        color: white;
        display: flex;
        align-items: center;
    }
  .el-image{
      line-height: 100%;
      width: 1.875rem;
      height: 50%;
    }
    /*下拉菜单*/
    .el-dropdown-menu{
        border: 1px solid red;
    }
</style>
