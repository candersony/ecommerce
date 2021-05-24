<template>
  <div class="home">
    <el-carousel indicator-position="none">
      <el-carousel-item v-for="product in featured" :key="product.id">
        <ProductTile v-bind="product" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { Product } from "@/product/model/product";
import ProductTile from "@/product/components/ProductTile.vue";
import { useProducts } from "@/product/use-products";

export default {
  name: "Home",
  components: { ProductTile },
  setup: useProducts,
  computed: {
    featured(): Product[] {
      return this.products.slice(0, 5);
    },
  },
};
</script>
