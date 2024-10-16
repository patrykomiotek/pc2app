"use client";

import { useState, useEffect } from "react";

import { Header } from "@/lib/ui";
import { getProducts } from "@/features/products/services/products";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Item = {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    description: string;
    price: number;
    created_at: string;
    updated_at: string;
  };
};

type ResponseProperties = {
  records: Item[];
};

export default function Reviews() {
  const { refresh } = useRouter();
  const [products, setProducts] = useState<Item[]>([]);

  useEffect(() => {
    getProducts().then((products: ResponseProperties) => {
      console.log({ products });

      setProducts(products.records);
    });
  }, []);

  return (
    <div>
      <Header>Products</Header>
      <div>
        <Link href="/products/create">Create</Link>
      </div>
      <div>
        <button onClick={() => refresh()}>Refresh</button>
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
