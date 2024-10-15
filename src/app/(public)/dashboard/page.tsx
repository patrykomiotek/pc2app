import { LastProductTile } from "@/app/components/LastProductTile";
import { ProductsCountSockTile } from "@/app/components/ProductsCountStockTile";
import { ProductsCountTile } from "@/app/components/ProductsCountTile";
import { ProductsList } from "@/app/components/ProductsList";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <>
      <div className="flex">
        {/* <Suspense fallback={<p>Loading last product...</p>}>
          <LastProductTile />
        </Suspense> */}
      </div>
      <div className="flex">
        <div className="w-1/2 mr-4">
          <Suspense fallback={<p>Loading...</p>}>
            <ProductsList />
          </Suspense>
        </div>
        <div className="w-1/2">
          <Suspense fallback={<p>Loading products count...</p>}>
            <ProductsCountTile />
          </Suspense>
          <Suspense fallback={<p>Products in stock...</p>}>
            <ProductsCountSockTile />
          </Suspense>
        </div>
      </div>
    </>
  );
}
