import { apiSlice } from "../api/apiSlice";

const quizzesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuizzes: builder.query({
      query: () => "/quizzes",
      providesTags: ["Quizzes"],
    }),
    getQuizzes: builder.query({
      query: (videoId) => `/quizzes?video_id=${videoId}`,
      providesTags: (result, error, arg) => [{ type: "Quizzes", id: arg }],
    }),
    addQuiz: builder.mutation({
      query: (data) => ({
        url: "/quizzes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Quizzes"],
    }),
    editQuiz: builder.mutation({
      query: ({ id, videoId, data }) => ({
        url: `/quizzes/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Quizzes",
        { type: "Quizzes", id: arg.videoId },
      ],
    }),
    deleteQuiz: builder.mutation({
      query: (id) => ({
        url: `/quizzes/${id}`,
      }),
      invalidatesTags: ["Quizzes"],
    }),
  }),
});

export const {
  useGetAllQuizzesQuery,
  useGetQuizzesQuery,
  useAddQuizMutation,
  useEditQuizMutation,
  useDeleteQuizMutation,
} = quizzesApi;
