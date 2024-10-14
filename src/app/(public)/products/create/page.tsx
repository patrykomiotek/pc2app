"use client";
import { z } from "zod";
import {
  createProduct,
  getProducts,
} from "@/features/products/services/products";
import { redirect, useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProductDto, validationSchema } from "@/features/products/types";
import { createProductAction } from "@/features/products/actions";

// type CreateProductDto = {
//   name: string;
//   description: string;
//   price: number;
// };

export default function CreateProduct() {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>({
    resolver: zodResolver(validationSchema),
  });

  const handleProductForm: SubmitHandler<CreateProductDto> = async (data) => {
    console.log(data);

    // try {
    // const result = await createProduct(data);
    const { success } = await createProductAction(data);
    if (success) {
      push("/products");
    } else {
      // UI Error
    }
    // redirect("/products");
    // push("/products");
    // } catch {}
  };

  return (
    <div>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(handleProductForm)}
      >
        <input
          type="text"
          {...register("name", { max: 100 })}
          maxLength={100}
          className="border border-indigo-700 px-4 py-4 text-black"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-400">{errors.name.message}</p>}
        <input
          type="text"
          {...register("description", { max: 100 })}
          maxLength={100}
          className="border border-indigo-700 px-4 py-4 text-black"
          placeholder="Description"
        />
        {errors.description && (
          <p className="text-red-400">{errors.description.message}</p>
        )}
        <input
          type="number"
          {...register("price", { valueAsNumber: true })}
          min={1}
          className="border border-indigo-700 px-4 py-4 text-black"
          placeholder="Price"
        />
        {errors.price && <p className="text-red-400">{errors.price.message}</p>}
        <button className="border border-indigo-700 px-4 py-4">Submit</button>
      </form>
    </div>
  );
}
