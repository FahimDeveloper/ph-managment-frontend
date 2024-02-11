import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_REACT_APP_API_URL,
    credentials: "include",
  }),
  endpoints: () => ({}),
});
