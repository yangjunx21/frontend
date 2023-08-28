<template>
  <div id="background">
    <LeftAbove />
    <div class="page-content">
      <el-row>
        <el-col :span="14">
          <div class="chat-wrapper">
            <div class="chat-container">
              <div
                v-for="(message, index) in messages"
                :key="index"
                :class="message.class"
              >
                <div class="message-content">{{ message.text }}</div>
              </div>
              <div v-if="isLoading" class="loading">
                <el-spin></el-spin>
              </div>
            </div>
            <div class="input-container">
              <el-input
                v-model="input"
                placeholder="请输入消息..."
                @keyup.enter="get_next_beat"
              ></el-input>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <img src="@/static/img/whale.jpg" class="index-photo" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        { text: "欢迎来到talegine！", class: "left-message" },
        { text: "享受交互式故事生成......", class: "left-message" },
        // ... 其他消息
      ],
      beats: [],
      final_act: "",
      input: "",
      isLoading: false,
      instruction: [
        "（事件的开始），具有张力的人物对话或者选择",
        "（冲突或者挑战）：可以是一个外部的障碍，或者是角色之间的冲突",
        "（情节加深）：冲突或挑战加剧，或者出现新的障碍",
        "（高潮）事件达到高潮，所有的冲突和挑战都达到了顶峰",
        "（结尾）解决冲突，描述如何解决了小事件中的冲突或挑战",
      ],
      current_beat: 0,
    };
  },
  created() {
    this.loadMessagesFromLocalStorage();
    this.get_background();
  },
  methods: {
    // 保存对话列表到 Local Storage
    saveMessagesToLocalStorage() {
      const messagesString = JSON.stringify(this.messages);
      const beatsString = JSON.stringify(this.beats);
      localStorage.setItem("chatMessages", messagesString);
      localStorage.setItem("beatMessages", beatsString);
      localStorage.setItem("idMessages", this.current_beat);
      localStorage.setItem("loadMessages", this.begin);
    },

    // 从 Local Storage 恢复对话列表
    loadMessagesFromLocalStorage() {
      const messagesString = localStorage.getItem("chatMessages");
      const beatsString = localStorage.getItem("beatsMessages");
      this.current_beat = localStorage.getItem("idMessages");
      if (messagesString) {
        this.messages = JSON.parse(messagesString);
      }
      if (beatsString) {
        this.beats = JSON.parse(beatsString);
      }
    },

    async get_background() {
      this.isLoading = true; // 显示加载动画
      request(`/api/get_background`, "GET")
        .then((res) => {
          console.log(res);
          this.background = res.background;
          this.final_act = background["ending"];
          if (this.messages.length <= 2) {
            this.beats.push(background["background"]);
            this.messages.push({
              text: this.background["background"],
              class: "left-message",
            });
          }
          console.log(this.background);
          this.isLoading = false; // 显示加载动画
          this.saveMessagesToLocalStorage();
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false; // 显示加载动画
        });
    },
    async get_next_beat() {
      this.messages.push({
        text: this.input,
        class: "right-message",
      });
      var instruction_now =
        this.instruction[this.current_beat] + this.current_beat < 4
          ? "\n5.在节拍的结尾营造出让%hero%陷入两难的局面。要以故事展现，而不要去描述选项是什么、选项的意义和影响。"
          : "";
      this.isLoading = true; // 显示加载动画
      if (this.current_beat == 4) {
        this.current_beat += 1;
      } else {
        this.current_beat = 0;
      }
      var form = {
        plan: this.background,
        beats: this.beats,
        given_choice: this.input,
        instruction: instruction_now,
      };
      this.messages.push({
        text: "加载中...",
        class: "left-message",
      });
      this.input = "";
      request(`/api/get_next_beat`, "POST", form)
        .then((res) => {
          console.log(res);
          this.messages.pop();
          this.messages.push({
            text: res["next_beat"],
            class: "left-message",
          });
          this.beats.push(res["next_beat"]);
          this.$nextTick(() => {
            const container = this.$el.querySelector(".chat-container");
            container.scrollTop = container.scrollHeight;
          });
          this.isLoading = false; // 显示加载动画
          this.saveMessagesToLocalStorage();
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false; // 显示加载动画
        });
    },
  },
};
</script>

<style scoped>
.chat-wrapper {
  width: 100vh;
  height: auto;
  border: 1px solid #ccc;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.chat-container {
  flex: 1;
  overflow-y: auto; /* 允许垂直滚动 */
  padding: 10px;
  max-height: 100vh; /* 你可以根据需要设置一个合适的高度 */
  width: 100vh;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 0 auto;
}

.index-photo {
  height: 75vh; /* 调整图片的高度 */
  width: auto; /* 根据原始图片比例自动调整宽度 */
}

.page-content {
  overflow: auto;
  display: flex;
  position: relative; /* 为内部绝对或固定定位元素提供参照 */
  margin-top: 60px; /* 为顶栏留出空间 */
  margin-left: 240px; /* 为侧边栏留出空间，你可以根据侧边栏的宽度进行调整 */
}

.left-message .message-content {
  background-color: #f1f1f1;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  margin: 5px 0;
}

.right-message .message-content {
  background-color: #09f;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  margin: 5px 0;
  float: right;
  clear: both;
}
</style>