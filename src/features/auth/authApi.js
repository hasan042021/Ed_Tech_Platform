import { apiSlice } from "../api/apiSlice";
import { userLogin } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          console.log("hello");
          const result = await queryFulfilled;
          dispatch(userLogin(result.data));
        } catch (error) {}
      },
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          console.log("hello");
          const result = await queryFulfilled;
          dispatch(userLogin(result.data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
