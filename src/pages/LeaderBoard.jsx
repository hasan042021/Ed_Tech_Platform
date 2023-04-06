import React, { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import StudentPositionTable from "../components/leaderboard/StudentPositionTable";
import TopResultsTable from "../components/leaderboard/TopResultsTable";
import { useGetAllAssignmentMarkQuery } from "../features/assignmentMark/assignmentMarkApi";
import { useGetAllQuizMarkQuery } from "../features/quizMark/quizMarkApi";
import { useGetUsersQuery } from "../features/users/usersApi";
import { calculateStudentsResults } from "../utils/calculateStudentResults";

const LeaderBoard = () => {
  const { data: assignmentsMark } = useGetAllAssignmentMarkQuery();
  const { data: quizMark } = useGetAllQuizMarkQuery();
  const { data: users } = useGetUsersQuery();
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    if (
      assignmentsMark?.length > 0 &&
      quizMark?.length > 0 &&
      users?.length > 0
    ) {
      const usersWithoutAdmin = users.filter((user) => user.role !== "admin");
      const leaderboardData = calculateStudentsResults(
        assignmentsMark,
        quizMark,
        usersWithoutAdmin
      );
      setLeaderboard(leaderboardData);
    }
  }, [assignmentsMark, quizMark, users]);
  return (
    <Layout>
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <StudentPositionTable leaderboard={leaderboard} />
          <TopResultsTable leaderboard={leaderboard} />
        </div>
      </section>
    </Layout>
  );
};

export default LeaderBoard;
