import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().min(3, "Provide at least 3 characters"),
  description: z.string().min(3, "Provide at least 3 characters"),
  price: z.number().positive(),
});

export type CreateProductDto = z.infer<typeof validationSchema>;
