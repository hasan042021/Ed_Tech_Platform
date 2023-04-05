import { apiSlice } from "../api/apiSlice";

const assignmentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignments: builder.query({
      query: () => `/assignments`,
      providesTags: ["Assignments"],
    }),

    getAssignment: builder.query({
      query: (id) => `/assignments?video_id=${id}`,
      providesTags: ["Assignment"],
    }),
    addAssingment: builder.mutation({
      query: (data) => ({
        url: `/assignments`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Assignments"],
    }),
    editAssingment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/assignments/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Assignments",
        { type: "Assignment", id: arg.id },
      ],
    }),
    deleteAssingment: builder.mutation({
      query: (id) => ({
        url: `/assignments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Assignments"],
    }),
  }),
});

export const {
  useGetAssignmentsQuery,
  useGetAssignmentQuery,
  useAddAssingmentMutation,
  useEditAssingmentMutation,
  useDeleteAssingmentMutation,
} = assignmentsApi;
