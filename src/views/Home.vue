<template>
  <div class="home">
    <el-carousel indicator-position="none">
      <el-carousel-item v-for="product in featured" :key="product.id">
        <ProductTile v-bind="product" />
      </el-carousel-item>
    </el-carousel>
    <el-divider />
    <div class="grid">
      <ProductTile
        v-for="product in products"
        :key="product.id"
        v-bind="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ProductTile from "@/product/components/ProductTile.vue";
import { useProducts } from "@/product/use-products";
import { useFeaturedProducts } from "@/product/use-featured-products";
import { Ref } from "@vue/reactivity";
import { Product } from "@/product/model/product";

export default {
  name: "Home",
  components: { ProductTile },
  setup(): { featured: Ref<Product[]>; products: Ref<Product[]> } {
    const { products } = useProducts();
    const featured = useFeaturedProducts(products);

    return { featured, products };
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
</style>
