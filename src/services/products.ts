const API_PATH = "https://api.airtable.com/v0/appikgzY018mp2gcs";
const API_TOKEN =
  "pat5g1IXZYHvSxx0o.7181c416fc88c8ee5cbb673e8c43da65009e9044b1c7bb0d2e32ff9110ae7467";

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
