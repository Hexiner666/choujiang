<template>
     <el-table
      :data="tableData">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gift"
        label="奖项">
      </el-table-column>
    </el-table>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            gift: '一等奖'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            gift: '一等奖'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            gift: '一等奖'
          },{
            date: '2016-05-01',
            name: '王小虎',
            gift: '一等奖'
          },{
            date: '2016-05-01',
            name: '王小虎',
            gift: '一等奖'
          },{
            date: '2016-05-01',
            name: '王小虎',
            gift: '一等奖'
          },{
            date: '2016-05-03',
            name: '王小虎',
            gift: '一等奖'
          }]
        }
      }
    }
  </script>

<style scoped>
.el-table{
    width: 800px;
    margin: 50px auto;
    border: 4px double #606266;
    border-radius: 15px;
    padding: 20px;
}
</style>