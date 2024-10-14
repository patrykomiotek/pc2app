const API_PATH = process.env.NEXT_PUBLIC_API_PATH;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

class InvalidResponse extends Error {}

export const getProducts = () =>
  fetch(`${API_PATH}/products`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    // Sentry.captureException()
    // Sentry.addTag
    throw new InvalidResponse("Response invalid");
  });

export const createProduct = (
  name: string,
  description: string,
  price: number
) =>
  fetch(`${API_PATH}/products`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: { name, description, price },
        },
      ],
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new InvalidResponse("Response invalid");
  });
