import { Item } from "@/features/products/services/products";

type Props = { products: Item[] };

export const ProductsList = ({ products }: Props) => (
  <ul>
    {products.map((product) => (
      <li key={product.id} className="border border-indigo-700">
        <h2 className="px-4 py-4 font-bold">Name: {product.fields.name}</h2>
        <h3 className="px-4 py-4 font-bold">
          Description: {product.fields.description}
        </h3>
      </li>
    ))}
  </ul>
);
