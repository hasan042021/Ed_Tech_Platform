import React, { useEffect, useState } from "react";
import { useEditAssignmentMarkMutation } from "../../features/assignmentMark/assignmentMarkApi";

// {
//   "id": 2,
//   "student_id": 2,
//   "student_name": "Saad Hasan",
//   "assignment_id": 1,
//   "title": "Assignment 2 - Implement Best Practices",
//   "createdAt": "2021-01-15T15:17:01.727Z",
//   "totalMark": 100,
//   "mark": 100,
//   "repo_link": "https://github.com/Learn-with-Sumit/assignment-1",
//   "status": "published"
// },

const IndividulsMark = ({ details }) => {
  const { title, createdAt, student_name, repo_link, status, mark, id } =
    details;
  const [achievedMark, setAchievedMark] = useState("");
  const [editAssignmentMark, { isLoading }] = useEditAssignmentMarkMutation();
  useEffect(() => {
    console.log(achievedMark);
  }, [achievedMark]);
  const handleMarkUpdate = (e) => {
    e.preventDefault();
    const updatedData = {
      ...details,
      mark: Number(achievedMark),
      status: "published",
    };
    editAssignmentMark({
      id,
      data: updatedData,
    });
  };
  return (
    <tr>
      <td className="table-td">{title}</td>
      <td className="table-td">{createdAt}</td>
      <td className="table-td">{student_name}</td>
      <td className="table-td">{repo_link}</td>
      <td className="table-td input-mark justify-end">
        {status === "pending" ? (
          <form onSubmit={handleMarkUpdate}>
            <input
              max="100"
              type="number"
              required
              value={achievedMark}
              onChange={(e) => setAchievedMark(e.target.value)}
            />
            <button type="submit">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </button>
          </form>
        ) : (
          mark
        )}
      </td>
    </tr>
  );
};

export default IndividulsMark;
