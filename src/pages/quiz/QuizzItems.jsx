import React from "react";
import QuizItem from "./QuizItem";

const QuizzItems = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold">
        Quizzes for "Debounce Function in JavaScript - JavaScript Job Interview
        question"
      </h1>
      <p className="text-sm text-slate-200">Each question contains 5 Mark</p>
      <div class="space-y-8 ">
        <QuizItem />
        <QuizItem />
        <QuizItem />
      </div>
    </div>
  );
};

export default QuizzItems;
