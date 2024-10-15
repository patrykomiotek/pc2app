import {
  getProduct,
  getProductsCount,
} from "@/features/products/services/products";
import { CountTile } from "./CountTile";

export const LastProductTile = async () => {
  // { success }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // const count = await getProduct();

  return (
    <div className="border-2 border-blue-500">
      <CountTile count={count} title="All products" />
    </div>
  );
};
