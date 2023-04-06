import _ from "lodash";
import React from "react";
import QuizItem from "./QuizItem";

const QuizzItems = ({ data, formData, setFormData }) => {
  const handleChange = (e, quizId, optionId) => {
    console.log(e.target.checked, quizId, optionId);
    const updatedFormData = _.cloneDeep(formData);
    const questionIndex = updatedFormData.findIndex(
      (q) => q.question === quizId
    );
    const itemIndex = updatedFormData[questionIndex].answers.findIndex(
      (opt) => opt.id === optionId
    );
    updatedFormData[questionIndex].answers[itemIndex].checked =
      e.target.checked;
    setFormData(updatedFormData);
  };
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold">{data && data[0].video_title}</h1>
      <p className="text-sm text-slate-200">Each question contains 5 Mark</p>
      <div class="space-y-8 ">
        {data?.map((quiz) => (
          <QuizItem quiz={quiz} handleChange={handleChange} />
        ))}
      </div>
    </div>
  );
};

export default QuizzItems;
