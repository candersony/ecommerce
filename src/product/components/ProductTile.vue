<template>
  <el-card>
    <div class="card">
      <el-image :src="image" fit="scale-down"></el-image>
      <div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    image: String,
    title: String,
    description: String,
  },
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-height: 250px;
  padding: 10px;
}
.el-image {
  max-width: 20%;
  height: auto;
}
</style>
