import {
  getProduct,
  getProductsCount,
} from "@/features/products/services/products";
import { CountTile } from "./CountTile";
import { getLastProductId } from "@/lib/cookies";

export const LastProductTile = async () => {
  // { success }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const productId = getLastProductId();

  if (!productId) {
    return <p>No product found</p>;
  }

  const product = await getProduct(productId);

  return (
    <div className="border-2 border-blue-500">
      <h2>{product.fields.name}</h2>
    </div>
  );
};
