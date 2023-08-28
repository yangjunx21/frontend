<template>
  <div id="background">
    <LeftAbove />
    <div class="page-content">
      <el-row>
        <el-col :span="16">
          <img src="@/static/img/index.png" class="index-photo" />
        </el-col>
        <el-col :span="8">
          <Three style="padding-bottom: 20vh;" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Tutorial from '../components/Tutorial.vue';
import LeftAbove from '../components/LeftAbove.vue';

export default {
  components: { Tutorial, LeftAbove },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  created(){
    localStorage.clear();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>


<style>
#background {
  width: 100%;
  min-height: 100vh;
  background: url("~@/static/img/350.jpg") center center no-repeat;
  background-size: 100% 100%;
  opacity: 1;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  margin: 0;
  padding: 0;
  z-index: 0;
  display: flex; /* 使用Flexbox布局 */
  flex-direction: column; /* 垂直布局 */
}

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

.page-content {
  overflow: auto;
  display: flex;
  position: relative; /* 为内部绝对或固定定位元素提供参照 */
  margin-top: 60px; /* 为顶栏留出空间 */
  margin-left: 240px; /* 为侧边栏留出空间，你可以根据侧边栏的宽度进行调整 */
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