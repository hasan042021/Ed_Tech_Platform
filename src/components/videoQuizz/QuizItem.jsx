import React from "react";

const QuizItem = ({ quiz, handleChange }) => {
  const { question, options, id: quizId } = quiz;
  return (
    <div class="quiz">
      <h4 class="question">{question}</h4>
      <form class="quizOptions">
        {options.map((option) => (
          <label htmlFor={`option${option.id}_q${quizId}`}>
            <input
              type="checkbox"
              id={`option${option.id}_q${quizId}`}
              onChange={(e) => handleChange(e, quizId, option.id)}
            />
            {option.option}
          </label>
        ))}
      </form>
    </div>
  );
};

export default QuizItem;

{
  /* <label for={`option2_q${quizId}`}>
          <input type="checkbox" id={`option2_q${quizId}`} />A function that is
          called after a certain time interval
        </label>

        <label for={`option3_q${quizId}`}>
          <input type="checkbox" id={`option3_q${quizId}`} />A function that is
          called after a certain time interval
        </label>

        <label for={`option4_q${quizId}`}>
          <input type="checkbox" id={`option4_q${quizId}`} />A function that is
          called after a certain time interval
        </label> */
}
