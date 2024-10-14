"use client";

import { useState, useEffect } from "react";

import { Header } from "@/lib/ui";

const getProducts = () =>
  fetch("https://api.airtable.com/v0/appikgzY018mp2gcs/products", {
    headers: {
      Authorization:
        "Bearer pat5g1IXZYHvSxx0o.7181c416fc88c8ee5cbb673e8c43da65009e9044b1c7bb0d2e32ff9110ae7467",
    },
  });

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
  const [products, setProducts] = useState<Item[]>([]);

  useEffect(() => {
    getProducts()
      .then((response) => response.json())
      .then((products: ResponseProperties) => {
        console.log({ products });

        setProducts(products.records);
      });
  }, []);

  return (
    <div>
      <Header>Reviews</Header>
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
