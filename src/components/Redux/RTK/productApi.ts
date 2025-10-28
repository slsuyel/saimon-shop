import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: ({ limit = 10 }) => ({
        url: `/products?limit=${limit}`,
        method: "GET",
      }),
    }),

    singleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAllProductsQuery, useSingleProductQuery } = productApi;
