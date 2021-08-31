<template>
  <div id="Home">
    <el-container>
  <el-header>
    <h2>后台管理页面</h2>
  </el-header>  
  <el-container>
    <el-aside>
    <el-menu
     >
       <el-menu-item >
        <i class="el-icon-menu"></i>
        <span slot="title">
          <router-link to="/manage/BackedpageA">中奖信息</router-link>
        </span>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-setting"></i>
        <span slot="title">
          <router-link to="/manage/BackedpageB">奖品设置</router-link>
          </span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
    
  </div>
</template>
<script>


export default {
 
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.el-header{
  width: 100%;
  height: 84px;
  background-color: blanchedalmond;
}

.el-aside{
  width: 200px;
  height: 800px;
}

.el-menu{
  height: 100%;
}
</style>