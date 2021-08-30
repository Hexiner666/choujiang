<template>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="奖项名称">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="奖项数量">
    <el-input v-model="formLabelAlign.number"></el-input>
  </el-form-item>
  <el-form-item label="奖项概率">
    <el-input v-model="formLabelAlign.probability"></el-input>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          number: '',
          probability: ''
        }
      };
    }
  }
</script>