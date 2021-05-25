import { Ref, ref, watch } from "vue";
import { Product } from "./model/product";

export function useProduct(productId: string | number): {
  product: Ref<Product | undefined>;
} {
  const product = ref<Product>();

  watch(
    () => productId,
    async (id) => {
      if (!id) {
        return;
      }

      product.value = await fetch(
        `https://fakestoreapi.com/products/${id}`
      ).then((response) => response.json());
    },
    { immediate: true }
  );

  return { product };
}
