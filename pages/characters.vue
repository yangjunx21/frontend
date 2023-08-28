<template>
  <div id="background">
    <LeftAbove />
    <div class="page-content">
      <el-row>
        <el-col :span="18">
          <el-card
            v-for="(character, i) in characters"
            :key="i"
            :index="character.name"
            class="card"
          >
            <el-descriptions class="margin-top" :column="2" size="Small" border>
              <el-descriptions-item label="name" :span="2">{{
                character.name
              }}</el-descriptions-item>
              <el-descriptions-item label="background" :span="4">{{
                character.background
              }}</el-descriptions-item>
              <el-descriptions-item label="current_situation" :span="2">{{
                character.current_situation
              }}</el-descriptions-item>
              <el-descriptions-item label="belief" :span="2">{{
                character.belief
              }}</el-descriptions-item>
              <el-descriptions-item label="hero_facet" :span="2">{{
                character.hero_facet
              }}</el-descriptions-item>
              <el-descriptions-item label="observed_traits" :span="2">{{
                character.observed_traits
              }}</el-descriptions-item>
              <el-descriptions-item label="true_nature" :span="2">{{
                character.true_nature
              }}</el-descriptions-item>
              <el-descriptions-item label="tone" :span="2">{{
                character.tone
              }}</el-descriptions-item>
              <el-descriptions-item
                label="relation_with_other_character"
                :span="2"
                >{{
                  character.relation_with_other_character
                }}</el-descriptions-item
              >
            </el-descriptions>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix" style="color: white">
              创建新角色
            </div>
            <el-form>
              <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="种子">
                <el-input v-model="form.seed"></el-input>
              </el-form-item>
              <el-form-item label="复杂度">
                <el-input v-model="form.complexity"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="createRole"
                  >确认创建</el-button
                >
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      characters: [],
      form: {
        name: '',
        seed: '',
        complexity: ''
      }
    };
  },
  mounted() {
    this.updateBoard();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    createRole() {
      console.log(this.form);
      // 在这里处理创建新角色的逻辑
    },
    async updateBoard() {
      request(`/api/characters`, "GET")
        .then((res) => {
          console.log(res);
          this.characters = res.characters;
        })
        .catch((err) => alert("err"));
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
  /* background-attachment: fixed; */
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

.box-card {
  width: 50%;
  margin: 0 auto;
  /* 设置卡片的宽度为屏幕的一半 */
  width: 20vw;
  /* 设置卡片的高度，你可以根据需要进行调整 */
  height: auto;
  /* 设置背景颜色为淡蓝色 */
  background-color: #1f9ce0;
  /* 设置边框圆角 */
  border-radius: 20px;
  /* 设置阴影效果，使卡片具有体积感 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  /* 设置卡片的边距，使其在页面上居中显示 */
  padding: 5px;
  margin: 5vh auto;
  /* 设置文本居中 */
  text-align: center;
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

.card {
  /* 设置卡片的宽度为屏幕的一半 */
  width: 50vw;
  /* 设置卡片的高度，你可以根据需要进行调整 */
  height: auto;
  /* 设置背景颜色为淡蓝色 */
  background-color: #d1e7fe;
  /* 设置边框圆角 */
  border-radius: 20px;
  /* 设置阴影效果，使卡片具有体积感 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  /* 设置卡片的边距，使其在页面上居中显示 */
  padding: 5px;
  margin: 5vh auto;
  /* 设置文本居中 */
  text-align: center;
}
</style>