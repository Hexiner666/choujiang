<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="dialogTitle" width="50%" :visible.sync="iconFormVisible">
      <el-form :inline="true" :model="userInfo" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="userInfo.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-input v-model="userInfo.date" placeholder="日期"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="userInfo.address" placeholder="地址"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="iconFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitUser()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconFormVisible: false,
      userInfo: {},
      dialogTitle: "增加",
      rowIndex: null,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogTitle = "编辑";
      this.userInfo = row;
      this.iconFormVisible = true;
      this.rowIndex = index;
    },
    handleDelete(index, row) {
      console.log(index, row);
      console.log(this.tableData);
      let arr = this.tableData;
      arr.splice(index, 1);
    },
  },
  submitUser() {
    if (this.dialogTitle === "编辑") {
      this.tableData.splice(this.rowIndex, 1, this.userInfo);
      this.iconFormVisible = false;
      return;
    }
    this.tableData.splice(0, 0, this.userInfo);
    this.iconFormVisible = false;
  },
};
</script>

<style scoped>
.el-form {
  width: 600px;
  margin: 20px auto;
}
</style>