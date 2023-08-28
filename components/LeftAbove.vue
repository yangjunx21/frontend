<template>
  <div>
    故事生成
    <el-menu
      :default-active="activeIndex"
      :router="true"
      @select="handleSelect"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      menu-align="end"
      class="top-menu"
    >
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="8">
          <div class="logo-title-container">
            <img src="@/static/img/logo.png" class="menu-logo" />
            <span class="menu-title">故事引擎demo</span>
          </div>
        </el-col>
        <el-col :span="17">
          <el-row type="flex" justify="end">
            <el-menu-item index="3"></el-menu-item>
          </el-row>
        </el-col>
      </el-row>
    </el-menu>
    <el-menu
      :default-active="this.$route.path"
      class="side-menu"
      background-color="#545c64"
      text-color="white"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      navList: [
        { name: "/", navItem: "整体规划" },
        { name: "/characters", navItem: "人物信息" },
        { name: "/dialog", navItem: "故事生成" },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>


<style>
.wrapper {
  position: relative; /* 为内部绝对或固定定位元素提供参照 */
}

.top-menu {
  width: 100%; /* 使顶栏填满视窗的宽度 */
  position: fixed; /* 固定定位顶栏 */
  top: 0; /* 放置在视窗的顶部 */
  left: 0; /* 和左侧对齐 */
  z-index: 2; /* 确保在侧边栏之上 */
}

.side-menu {
  width: 25vh;
  height: 100vh; /* 使侧边栏填满视窗的高度 */
  position: fixed; /* 固定定位侧边栏 */
  top: 0; /* 与顶部对齐 */
  left: 0; /* 和左侧对齐 */
  z-index: 1; /* 确保在顶栏之下 */
  padding-top: 60px; /* 为顶栏留出空间，你可以根据顶栏的高度进行调整 */
}

.menu-title {
  color: white;
  padding-left: 1vh;
  font-weight: bold; /* 加粗字体 */
  font-size: 24px; /* 设置字体大小 */
  line-height: 20px; /* 根据你的菜单高度进行调整，以垂直居中标题 */
}

.logo-title-container {
  display: flex; /* 使用 Flexbox 来对齐子元素 */
  align-items: center; /* 确保子元素在垂直方向上居中对齐 */
  position: fixed; /* 使用固定定位 */
  left: 20px; /* 距离屏幕左侧的距离，你可以调整这个值 */
  top: 10px; /* 距离屏幕顶部的距离，你也可以调整这个值 */
}

.menu-logo {
  height: 40px; /* 调整图片的高度 */
  width: auto; /* 根据原始图片比例自动调整宽度 */
}

.index-photo {
  height: 90vh; /* 调整图片的高度 */
  width: auto; /* 根据原始图片比例自动调整宽度 */
}
</style>