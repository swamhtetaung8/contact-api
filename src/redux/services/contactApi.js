import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "  https://contact-app.mmsdev.site/api/v1/",
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: `register`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: "contact",
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: `login`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: "contact",
    }),
    logoutUser: builder.mutation({
      query: (token) => ({
        url: `user-logout`,
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: "contact",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = contactApi;
