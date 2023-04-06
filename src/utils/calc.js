// Assume the data is retrieved and parsed into the following arrays/objects
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const assignmentMarks = [
  { userId: 1, mark: 80 },
  { userId: 1, mark: 90 },
  { userId: 2, mark: 75 },
  { userId: 3, mark: 85 },
];
const quizMarks = [
  { userId: 1, mark: 70 },
  { userId: 2, mark: 90 },
  { userId: 2, mark: 80 },
  { userId: 3, mark: 95 },
  { userId: 3, mark: 90 },
];

// Step 2: Group marks by user ID
const userAssignmentMarks = {};
const userQuizMarks = {};

assignmentMarks.forEach((mark) => {
  const { userId, mark: assignmentMark } = mark;
  if (!userAssignmentMarks[userId]) {
    userAssignmentMarks[userId] = [];
  }
  userAssignmentMarks[userId].push(assignmentMark);
});

quizMarks.forEach((mark) => {
  const { userId, mark: quizMark } = mark;
  if (!userQuizMarks[userId]) {
    userQuizMarks[userId] = [];
  }
  userQuizMarks[userId].push(quizMark);
});

console.log(userAssignmentMarks, userQuizMarks);
// Step 3: Calculate total marks for each user
const userTotalMarks = {};
users.forEach((user) => {
  const { id } = user;
  const assignmentMarks = userAssignmentMarks[id] || [];
  const quizMarks = userQuizMarks[id] || [];
  const totalMarks =
    assignmentMarks.reduce((acc, mark) => acc + mark, 0) +
    quizMarks.reduce((acc, mark) => acc + mark, 0);
  userTotalMarks[id] = totalMarks;
});

// Step 4: Sort users by total marks in descending order
const leaderboard = users.sort(
  (user1, user2) => userTotalMarks[user2.id] - userTotalMarks[user1.id]
);

// Print the leaderboard
leaderboard.forEach((user) => {
  const { id, name } = user;
  const totalMarks = userTotalMarks[id];
  console.log(`${name}: ${totalMarks}`);
});
