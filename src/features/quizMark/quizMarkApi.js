import { apiSlice } from "../api/apiSlice";

const quizMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuizMark: builder.query({
      query: () => `/quizMark`,
      providesTags: ["QuizMark"],
    }),
    addQuizMark: builder.mutation({
      query: (data) => ({
        url: `/quizMark`,
        method: "POST",
        body: data,
      }),
      providesTags: ["QuizMark"],
    }),
  }),
});

export const { useGetAllQuizMarkQuery, useAddQuizMarkMutation } = quizMarkApi;
