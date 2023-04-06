import React from "react";

const TopResultsTable = ({ leaderboard }) => {
  // const topLeaderboard = leaderboard?.filter((student) => student.rank <= 20);
  return (
    <div className="my-8">
      <h3 className="text-lg font-bold">Top 20 Result</h3>
      <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
        <thead>
          <tr className="border-b border-slate-600/50">
            <th className="table-th !text-center">Rank</th>
            <th className="table-th !text-center">Name</th>
            <th className="table-th !text-center">Quiz Mark</th>
            <th className="table-th !text-center">Assignment Mark</th>
            <th className="table-th !text-center">Total</th>
          </tr>
        </thead>

        <tbody>
          {leaderboard
            ?.filter((student) => student.rank <= 20)
            .map((student) => (
              <tr className="border-b border-slate-600/50">
                <td className="table-td text-center">{student.rank}</td>
                <td className="table-td text-center">{student.student_name}</td>
                <td className="table-td text-center">{student.quizTotal}</td>
                <td className="table-td text-center">
                  {student.assignmentTotal}
                </td>
                <td className="table-td text-center">{student.total}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopResultsTable;
