import { apiSlice } from "../api/apiSlice";

const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
