import { Item } from "@/features/products/services/products";
import { cookies } from "next/headers";

const COOKIE_NAME = "app-last-product";

export const setLastProductId = (productId: Item["id"]) => {
  cookies().set(COOKIE_NAME, productId, {});
};

export const getLastProductId = () => {
  return cookies().get(COOKIE_NAME)?.value;
};
