import { getProduct } from "@/features/products/services/products";
import { setLastProductId } from "@/lib/cookies";
import Link from "next/link";
import { setCookie } from "./actions";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductDetails({ params }: Props) {
  const product = await getProduct(params.id);
  // setLastProductId(product.id);
  await setCookie(product.id);

  return (
    <div>
      <h1>{product.fields.name}</h1>
      <p>{product.fields.description}</p>
      <p>{product.fields.price} PLN</p>
      <p>
        <Link href="/products">Back to products</Link>
      </p>
    </div>
  );
}
