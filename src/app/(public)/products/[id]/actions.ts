"use server";

import { Item } from "@/features/products/services/products";
import { setLastProductId } from "@/lib/cookies";

export const setCookie = async (productId: Item["id"]) => {
  console.log("costam");
  await setLastProductId(productId);
};
