<template>
  <router-link :to="url">
    <el-card>
      <div class="card">
        <el-image :src="image" fit="scale-down"></el-image>
        <div>
          <h2>{{ title }}</h2>
          <p class="description">{{ description }}</p>
        </div>
      </div>
    </el-card>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: Number,
    image: String,
    title: String,
    description: String,
  },
  computed: {
    url(): string {
      return `/product/${this.id}`;
    },
  },
});
</script>

<style lang="scss" scoped>
.el-card {
  height: 100%;
}
.card {
  display: flex;
  justify-content: space-evenly;
  max-height: 250px;
  padding: 10px;
  overflow: hidden;
}
.el-image {
  max-width: 20%;
  height: auto;
}
</style>
