import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_API_URL,
  }),
  tagTypes: [
    "Videos",
    "Video",
    "Assignments",
    "Assignment",
    "Quizzes",
    "AllMarks",
    "Mark",
    "StudentMark",
    "QuizMark",
    "SubmittedQuiz",
    "SingleQuizMark",
  ],
  endpoints: (builder) => ({}),
});
