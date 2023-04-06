import { apiSlice } from "../api/apiSlice";

const quizMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuizMark: builder.query({
      query: () => `/quizMark`,
      providesTags: ["QuizMark"],
    }),
    getQuizSubmitted: builder.query({
      query: ({ studentId, videoId }) =>
        `/quizMark?student_id=${studentId}&video_id=${videoId}`,
      providesTags: (result, error, arg) => [
        { type: "SingleQuizMark", id: arg.videoId },
        { type: "SubmittedQuiz", id: arg.studentId },
      ],
    }),
    addQuizMark: builder.mutation({
      query: (data) => ({
        url: `/quizMark`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "QuizMark",
        { type: "SingleQuizMark", id: arg.video_id },
        { type: "SubmittedQuiz", id: arg.student_id },
      ],
    }),
  }),
});

export const {
  useGetAllQuizMarkQuery,
  useAddQuizMarkMutation,
  useGetQuizSubmittedQuery,
} = quizMarkApi;
