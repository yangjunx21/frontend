<template>
  <div class="container">
    <div class="box box1">
      <span class="menu-title">世界观</span>
      <el-input
        type="textarea"
        autosize
        placeholder="输入参考作品名，自动提取世界观设定......"
        v-model="world_setting"
        class="white_text"
      >
      </el-input>
    </div>
    <div class="box box2">
      <span class="menu-title">故事主题</span>
      <el-input
        type="textarea"
        autosize
        placeholder="输入一个初步想法，交给系统继续完善......"
        v-model="theme"
        class="white_text"
      >
      </el-input>
    </div>
    <div class="box box3">
      <span class="menu-title">总体设计</span>
      <el-input
        type="textarea"
        autosize
        placeholder="叙事线索与主要角色的初步设计，可以输入要求，也可以完全交给系统......"
        v-model="overall_idea"
        class="white_text"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      world_setting: "",
      theme: "",
      overall_idea: "",
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.box {
  width: 550px;
  height: 240px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: -20px; /* 使模块略有重合 */
}

.box1 {
  background-color: #e1ccf3; /* 浅紫色 */
}

.box2 {
  background-color: #d3b2ec; /* 中等紫色 */
}

.box3 {
  background-color: #ad89d4; /* 深紫色 */
}

.menu-title {
  color: rgb(10, 10, 10);
  padding-left: 1vh;
  font-weight: bold; /* 加粗字体 */
  font-size: 24px; /* 设置字体大小 */
  line-height: 40px; /* 根据你的菜单高度进行调整，以垂直居中标题 */
}

.white_text {
  color: white;
}
</style>