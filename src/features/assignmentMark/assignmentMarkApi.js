import { apiSlice } from "../api/apiSlice";

const assignmentMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignmentMarks: builder.query({
      query: () => `/assignmentMark`,
    }),
    getAssignmentMark: builder.query({
      query: (id) => `/assignmentMark?video_id=${id}`,
    }),
    getAssingmentSubmitted: builder.query({
      query: ({ assignmentId, studentId }) =>
        `/assignmentMark?assignment_id=${assignmentId}&student_id=${studentId}`,
    }),
  }),
});

export const {
  useGetAssignmentMarkQuery,
  useGetAssignmentMarksQuery,
  useGetAssingmentSubmittedQuery,
} = assignmentMarkApi;
