import React from "react";
import { useSelector } from "react-redux";

const StudentPositionTable = ({ leaderboard }) => {
  const { id } = useSelector((state) => state.auth.user);
  const usersPosition = leaderboard?.find(
    (student) => student.student_id === id
  );
  return (
    <div>
      <h3 className="text-lg font-bold">Your Position in Leaderboard</h3>
      <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
        <thead>
          <tr>
            <th className="table-th !text-center">Rank</th>
            <th className="table-th !text-center">Name</th>
            <th className="table-th !text-center">Quiz Mark</th>
            <th className="table-th !text-center">Assignment Mark</th>
            <th className="table-th !text-center">Total</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-2 border-cyan">
            <td className="table-td text-center font-bold">
              {usersPosition?.rank}
            </td>
            <td className="table-td text-center font-bold">
              {usersPosition?.student_name}
            </td>
            <td className="table-td text-center font-bold">
              {usersPosition?.quizTotal}
            </td>
            <td className="table-td text-center font-bold">
              {usersPosition?.assignmentTotal}
            </td>
            <td className="table-td text-center font-bold">
              {usersPosition?.total}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentPositionTable;
