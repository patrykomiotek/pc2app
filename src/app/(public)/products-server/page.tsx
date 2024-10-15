import { Header } from "@/lib/ui";
import { getProducts } from "@/features/products/services/products";
import Link from "next/link";
import { ProductsList } from "../../components/ProductsList";
import { Suspense } from "react";
import { SearchProductsForm } from "./components/SearchProductForm";

type SearchProps = {
  searchParams: {
    query?: string;
  };
};

export default async function ProductsServer({ searchParams }: SearchProps) {
  // console.log({ searchParams });
  const query = searchParams.query;

  // const { records: products1 } = await getProducts();
  // const { records: products2 } = await getProducts();
  // const { records: products3 } = await getProducts();
  // const { records: products4 } = await getProducts();
  // const { records: products5 } = await getProducts();

  return (
    <div>
      <Header>Products</Header>
      <div>
        <Link href="/products/create">Create</Link>
      </div>

      <div className="my-2">
        <SearchProductsForm />
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <ProductsList query={query} />
      </Suspense>
      {/* 
      <Suspense fallback={<p>Loading...</p>}>
        <ProductsList products={products2} />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <ProductsList products={products3} />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <ProductsList products={products4} />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <ProductsList products={products5} />
      </Suspense> */}
    </div>
  );
}
