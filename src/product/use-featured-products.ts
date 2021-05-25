import { computed, Ref } from "vue";
import { Product } from "./model/product";

export function useFeaturedProducts(products: Ref<Product[]>): Ref<Product[]> {
  return computed(() => products.value.slice(0, 5));
}
