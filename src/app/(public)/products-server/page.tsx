import { Header } from "@/lib/ui";
import { getProducts } from "@/features/products/services/products";
import Link from "next/link";

export default async function ProductsServer() {
  const { records: products } = await getProducts();

  return (
    <div>
      <Header>Reviews</Header>
      <div>
        <Link href="/products/create">Create</Link>
      </div>
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
    </div>
  );
}
