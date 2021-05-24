<template>
  <el-menu mode="horizontal">
    <el-menu-item index="1">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="about">About us</router-link>
    </el-menu-item>
  </el-menu>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
  data() {
    return {
      activeIndex: "1",
    };
  },
});
</script>
<style lang="scss" scoped>
.el-menu {
  width: 100%;
  border-top: 1px solid grey;
}
</style>
