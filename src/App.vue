<template>
  <el-container class="root">
    <el-header><Header></Header></el-header>
    <el-main><router-view /></el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer,
  },
});
</script>

<style lang="scss" scoped>
.root {
  min-height: 100vh;
}
.el-header,
.el-footer {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background-color: #b3c0d1;
  // color: #333;
  text-align: center;
}

.el-main {
  // background-color: #e9eef3;
  // color: #333;
  text-align: center;
}
</style>
