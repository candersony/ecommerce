import { ref, onMounted, Ref } from "vue";
import { Product } from "../model/product";

export function useProducts(): {
  products: Ref<Product[]>;
  getProducts: () => Promise<void>;
} {
  const products = ref(new Array<Product>());
  const getProducts = async () =>
    (products.value = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
    ));

  onMounted(getProducts);

  return {
    products,
    getProducts,
  };
}
