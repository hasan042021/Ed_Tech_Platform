import { apiSlice } from "../api/apiSlice";

const quizzesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizzes: builder.query({
      query: (videoId) => `/quizzes?video_id=${videoId}`,
    }),
  }),
});

export const { useGetQuizzesQuery } = quizzesApi;
