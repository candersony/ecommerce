<template>
  <ProductDetails v-bind="product" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductDetails from "../components/ProductDetails.vue";
import { useRoute } from "vue-router";
import { useProduct } from "../use/use-product";

export default defineComponent({
  components: {
    ProductDetails,
  },
  setup() {
    const route = useRoute();
    return useProduct(route.params.id as string);
  },
});
</script>

<style></style>
