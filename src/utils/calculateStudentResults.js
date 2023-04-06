export const calculateStudentsResults = (assignmentMark, quizzMark, users) => {
  // Group marks by userId
  const studentsAssignmentMarks = {};
  const studentsQuizzMarks = {};

  assignmentMark.forEach((item) => {
    const { student_id, mark } = item;
    if (!studentsAssignmentMarks[student_id]) {
      studentsAssignmentMarks[student_id] = [];
    }
    studentsAssignmentMarks[student_id].push(mark);
  });

  quizzMark.forEach((item) => {
    const { student_id, totalMark } = item;
    if (!studentsQuizzMarks[student_id]) {
      studentsQuizzMarks[student_id] = [];
    }
    studentsQuizzMarks[student_id].push(totalMark);
  });

  // Calculate report for each user
  const studentsReport = users.map((user) => {
    const { id, name } = user;
    const assignmentMarks = studentsAssignmentMarks[id] || [];
    const quizMarks = studentsQuizzMarks[id] || [];
    const totalAssignmentMarks = assignmentMarks.reduce(
      (total, mark) => total + mark,
      0
    );
    const totalQuizMarks = quizMarks.reduce((total, mark) => total + mark, 0);
    const totalMarks = totalAssignmentMarks + totalQuizMarks;
    return {
      student_id: id,
      student_name: name,
      assignmentTotal: totalAssignmentMarks,
      quizTotal: totalQuizMarks,
      total: totalMarks,
    };
  });

  // Sort students reports
  studentsReport.sort((studentA, studentB) => studentB.total - studentA.total);

  // Assign ranking
  let rank = 1;
  studentsReport.forEach((report, index) => {
    if (index > 0 && report.total !== studentsReport[index - 1].total) {
      rank += 1;
    }
    report.rank = rank;
  });
  return studentsReport;
};
