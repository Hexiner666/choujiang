<template>
  <div id="Home">
    <el-container>
  <el-header>
    <h2>后台管理页面</h2>
  </el-header>
  <el-container>
    <el-aside width="400px">
      <el-col :span="5">
    <el-menu
      default-active="2"
      router
      class="el-icon-menu"
     >
       <el-menu-item index="/BackedpageA">
        <i class="el-icon-menu"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="/BackedpageB">
        <i class="el-icon-setting"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-col>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
    
  </div>
</template>
<script>
// import BackedpageA from '../components/BackedpageA'
// import BackedpageB from '../components/BackedpageB'

export default {
  // components: {
  //   BackedpageA,
  //   BackedpageB
  // },
  
  // methods: {
   
  // }
}
</script>

<style>



</style>