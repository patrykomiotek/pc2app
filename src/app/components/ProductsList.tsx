import { getProducts, Item } from "@/features/products/services/products";
import Link from "next/link";

type Props = { query?: string };

// export const ProductsList = ({ products }: Props) => (
export const ProductsList = async ({ query }: Props) => {
  const { records: products } = await getProducts(query);

  // const sortedProducts = products.filter((elem) =>
  //   elem.fields.name.includes(query)
  // );

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
