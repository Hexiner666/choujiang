<template>
  <div id="Home">
    <el-container>
  <el-header>

  </el-header>
  <el-container>
    <el-aside width="200px">
      <el-col :span="12">
    <h5>后台管理</h5>
    <el-menu
      default-active="2"
      class="el-icon-menu"
     >
       <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-col>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
    
  </div>
</template>
<script>
import BackedpageA from '../components/BackedpageA'
import BackedpageB from '../components/BackedpageB'

export default {
  components: {
    BackedpageA,
    BackedpageB
  },
  
  methods: {
   
  }
}
</script>

<style>

#Home > section > section > aside > div{
  width: 200px;
}
</style>