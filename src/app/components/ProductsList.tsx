import { getProducts, Item } from "@/features/products/services/products";
import Link from "next/link";

// export const ProductsList = ({ products }: Props) => (
export const ProductsList = async () => {
  const { records: products } = await getProducts();

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} className="border border-indigo-700">
          <h2 className="px-4 py-4 font-bold">
            <Link href={`/products/${product.id}`}>
              Name: {product.fields.name}
            </Link>
          </h2>
          <h3 className="px-4 py-4 font-bold">
            Description: {product.fields.description}
          </h3>
        </li>
      ))}
    </ul>
  );
};
