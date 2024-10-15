import { getProductsCount } from "@/features/products/services/products";
import { CountTile } from "./CountTile";

export const ProductsCountTile = async () => {
  // { success }
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const count = await getProductsCount();

  return (
    <div className="border-2 border-blue-500">
      <CountTile count={count} title="All products" />
    </div>
  );
};
