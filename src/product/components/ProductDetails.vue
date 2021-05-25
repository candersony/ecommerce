<template>
  <h1>{{ title }}</h1>
  <el-image :src="image" fit="scale-down"></el-image>
  <p class="description">{{ description }}</p>
  <div>£{{ price }}</div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductDetails",
  props: {
    title: String,
    image: String,
    description: String,
    price: Number,
  },
});
</script>

<style lang="scss" scoped>
.el-image {
  margin: 0 auto;
}
</style>
