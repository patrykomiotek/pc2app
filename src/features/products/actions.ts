"use server";

import { ZodError } from "zod";
import { createProduct, InvalidResponse } from "./services/products";
import { CreateProductDto, validationSchema } from "./types";

type ActionResponse = {
  success: boolean;
};

export const createProductAction = async (
  data: CreateProductDto
): Promise<ActionResponse> => {
  try {
    const result = validationSchema.parse(data);
    await createProduct(result);
    return { success: true };
  } catch (error) {
    if (error instanceof ZodError) {
      // Sentry.captureException -> monit
    } else if (error instanceof InvalidResponse) {
      // Sentry.captureException -> monit
    } else {
      // Sentry.captureException -> monit
    }

    return { success: false };
  }
};
