import { apiSlice } from "../api/apiSlice";

const assignmentMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAssignmentMark: builder.query({
      query: () => `/assignmentMark`,
      providesTags: ["AllMarks"],
    }),
    getAssignmentMark: builder.query({
      query: (id) => `/assignmentMark?video_id=${id}`,
      providesTags: (result, error, arg) => [{ type: "Mark", id: arg }],
    }),
    getAssingmentSubmitted: builder.query({
      query: ({ assignmentId, studentId }) =>
        `/assignmentMark?assignment_id=${assignmentId}&student_id=${studentId}`,
      providesTags: (result, error, arg) => [
        { type: "Mark", id: arg.assignmentId },
        { type: "StudentMark", id: arg.studentId },
      ],
    }),
    addToAssignmentMark: builder.mutation({
      query: (data) => ({
        url: `/assignmentMark`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "AllMarks",
        { type: "Mark", id: arg.id },
        { type: "StudentMark", id: arg.student_id },
      ],
    }),
    editAssignmentMark: builder.mutation({
      query: ({ id, data }) => ({
        url: `/assignmentMark/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "AllMarks",
        { type: "Mark", id: arg.id },
        { type: "StudentMark", id: arg.data.student_id },
      ],
    }),
  }),
});

export const {
  useGetAllAssignmentMarkQuery,
  useGetAssignmentMarksQuery,
  useGetAssingmentSubmittedQuery,
  useAddToAssignmentMarkMutation,
  useEditAssignmentMarkMutation,
} = assignmentMarkApi;
