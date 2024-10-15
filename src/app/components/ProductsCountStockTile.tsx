import {
  getProductsCount,
  getProductsCountInStock,
} from "@/features/products/services/products";
import { CountTile } from "./CountTile";

export const ProductsCountSockTile = async () => {
  // { success }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const count = await getProductsCountInStock();

  return (
    <div className="border-2 border-blue-500">
      <CountTile count={count} title="Products in stock" />
    </div>
  );
};
