<template>
  <div class="foot">
    <div class="border-bottom border-top bg-navcolor">
      <div class="d-flex py-6 jc-center">
        <div class="px-7 hand">
          <a href="https://github.com/CodeCat-hang?tab=repositories" target="_blank" class="text-grey-1">GitHub</a>
        </div>
        <div class="px-7 hand">
          <a
            href="https://blog.csdn.net/qq_43615797?spm=1000.2115.3001.5343"
            target="_blank"
            class="text-grey-1"
          >CSDN</a>
        </div>
        <div class="px-7 hand">
          <a href="https://codepen.io/CodeHangXinyu" class="text-grey-1">CodePen</a>
        </div>
      </div>
    </div>
    <div class="footer pt-3 bg-navcolor">
      <div class="pt-5 d-flex jc-center">
        <div class="px-8 mb-4">
          <router-link class="hand" tag="div" to="/">
            <img src="../assets/images/logo.jpg" height="32" />
          </router-link>
          <div class="text-grey-2 fs-sm">
            <p class="load">I work with passion & love.</p>
            <p>
              The Site is Powered by
              <a href="https://github.com/CodeCat-hang?tab=repositories" target="_blank">CodeCat</a>
            </p>
            <p>
              本博客已运行{{ this.timeObj.day }}天{{ this.timeObj.hour }}时{{
              this.timeObj.minute
              }}分{{ this.timeObj.second }}秒
            </p>
          </div>
        </div>
        <div class="px-8">
          <div class="text-grey-1 fs-md mt-5">RECENT POSTS</div>
          <div class="text-grey-2 fs-sm hand">
            <router-link
              tag="p"
              v-for="item in model"
              :to="`/article/list/${item._id}`"
              :key="item._id"
            >{{ item.title }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  data() {
    return {
      model: [],
      currentTime: "232",
      startTime: 1583856000000,
      timeCha: "232321",
      timeObj: {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
      },
      showTime: true,
      intTime: null
    };
  },
  created() {
    this.getTime();
  },
  beforeDestroy() {
    clearInterval(this.intTime);
  },
  methods: {
    async fetchArticles() {
      const res = await this.$http.get("articles/recent");
      this.model = res.data;
    },
    async getTime() {
      let res = await this.$http.get("/time");
      this.currentTime = res.data.data;
      this.timeCha = this.currentTime - this.startTime;
      this.getCountTime(this.timeCha);
      this.intTime = setInterval(() => {
        this.timeCha += 1000;
        this.getCountTime(this.timeCha);
      }, 1000);
    },
    // 将倒计的时间戳换算成天、时、分、秒
    getCountTime(time) {
      let countTime = {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
      };
      countTime.day = Math.floor(time / (24 * 60 * 60 * 1000));
      countTime.hour = Math.floor(
        (time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      countTime.minute = Math.floor(
        ((time % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) / (60 * 1000)
      );
      countTime.second = Math.floor(
        (((time % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) % (60 * 1000)) /
          1000
      );
      this.$nextTick(() => {
        this.timeObj = countTime;
        this.showTime = true;
      });
    }
  },
  mounted() {
    this.fetchArticles();
  }
};
</script>

<style lang="scss" scoped>
.foot {
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>
