import { CreateProductDto } from "../types";

const API_PATH = process.env.NEXT_PUBLIC_API_PATH;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export class InvalidResponse extends Error {}

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

export const getProducts = () =>
  fetch(`${API_PATH}/products`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  }).then((response) => {
    if (response.ok) {
      // server -> parse

      return response.json() as Promise<ResponseProperties>;
      // return response.json();
    }
    // Sentry.captureException()
    // Sentry.addTag
    throw new InvalidResponse("Response invalid");
  });

export const createProduct = async (data: CreateProductDto) =>
  fetch(`${API_PATH}/products`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: data,
        },
      ],
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new InvalidResponse("Response invalid");
  });
