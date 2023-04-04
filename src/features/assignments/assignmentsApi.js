import { apiSlice } from "../api/apiSlice";

const assignmentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignments: builder.query({
      query: () => `/assignments`,
    }),
    getAssignment: builder.query({
      query: (id) => `/assignments?video_id=${id}`,
    }),
  }),
});

export const { useGetAssignmentsQuery, useGetAssignmentQuery } = assignmentsApi;
