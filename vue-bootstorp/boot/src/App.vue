<template>
  <div id="app">
      <el-row :gutter="0"  style="position: fixed; width: 100%">
        <el-col :xs="0"  hidden-xs-only :sm="6" :md="6" :lg="6" :xl="6"  @click.native="nav(0)" :class="[nav_index===0 ?'active':'bg-purple']"><div class="grid-content">首页</div></el-col>
        <el-col :xs="0"  hidden-xs-only :sm="6" :md="6" :lg="6" :xl="6"  @click.native="nav(1)" :class="[nav_index===1 ?'active':'bg-purple-light']"><div class="grid-content">产品</div></el-col>
        <el-col :xs="0" hidden-xs-only :sm="6" :md="6" :lg="6" :xl="6" @click.native="nav(2)" :class="[nav_index===2 ?'active':'bg-purple']"><div class="grid-content">信息</div></el-col>
        <el-col :xs="0" hidden-xs-only :sm="6" :md="6" :lg="6" :xl="6" @click.native="nav(3)" :class="[nav_index===3 ?'active':'bg-purple-light']"> <div class="grid-content">暂定</div></el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" class="xs-nav">
            <div class="grid-content xs-grid-content animate__animated animate__lightSpeedInLeft">Cc</div>
            <div class="nav-button">
                <el-image
                        class="el-dropdown-link animate__animated animate__rotateIn"
                        :src="url"
                        fit="fit"
                        @click="navIcon"
                >
                </el-image>
            </div>
        </el-col>
          <el-col  :xs="24" :sm="0" :md="0" :lg="0" :xl="0" style="background-color: #150c17;">
              <el-collapse-transition>
                  <div v-show="nav_show"  class="nav_drop-down_list animate__animated animate__bounceInLeft">
                      <div class="nav_show_drop-down_list">信息介绍</div>
                      <div class="nav_show_drop-down_list">案列详情</div>
                      <div class="nav_show_drop-down_list">敬请期待</div>
                  </div>
              </el-collapse-transition>
          </el-col>
      </el-row>
      <keep-alive>
          <router-view style="margin-top: 3.15rem"></router-view>
      </keep-alive>
      <foot></foot>
    </div>
</template>
<script>
    import foot from "./components/footer"
  export default {
    name: 'App',
      components:{
        foot
      },
    data(){
      return{
        nav_index:0,
        url:require("./assets/images/nav-button.png"),
        nav_show:false
      }
    },
    methods:{
      nav(e){
        this.nav_index=e
      },
        navIcon(){
          this.nav_show=!this.nav_show
            if(this.nav_show !=false){
                this.url=require("./assets/images/xiala.png")
            }else {
                this.url=require("./assets/images/nav-button.png")
            }
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
  .el-row{
      top: 0;
      z-index: 100;
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
   .nav_drop-down_list{
       background-color: #150c17;
       color: white;
   }
    .nav_show_drop-down_list{
       padding: 0.625rem;
        margin-left: 30px;
    }
  .nav_show_drop-down_list:hover{
      color: sandybrown;
  }

</style>
