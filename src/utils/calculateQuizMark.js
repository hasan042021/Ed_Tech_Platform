export const calculateQuizMark = (state, data) => {
  let correct = 0,
    wrong = 0,
    mark = 0;
  const totalQuiz = data.length;
  for (let i = 0; i < state.length; i++) {
    const answeredQuiz = state[i];
    const studentAnswers = answeredQuiz.answers;
    const quiz = data.find((q) => answeredQuiz.question === q.id);
    const actualAnswers = quiz.options;
    // console.log(studentAnswers, actualAnswers);
    let isRight = true;
    for (let i = 0; i < 4; i++) {
      const obj1 = studentAnswers[i];
      const obj2 = actualAnswers.find((obj) => obj.id === obj1.id);
      if (obj1.checked !== obj2.isCorrect) {
        isRight = false;
        break;
      }
    }
    if (isRight) {
      correct += 1;
    } else {
      wrong += 1;
    }
  }
  mark = correct * 5;
  return { correct, wrong, mark, totalQuiz };
};
