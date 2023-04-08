import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAddToAssignmentMarkMutation } from "../../features/assignmentMark/assignmentMarkApi";

const AssignmentSection = ({ assignmentInfo, show }) => {
  const [addToAssignment, {}] = useAddToAssignmentMarkMutation();
  const [repo, setRepo] = useState("");
  const [info, setInfo] = useState();
  const { id: student_id, name: student_name } = useSelector(
    (state) => state.auth.user
  );
  useEffect(() => {
    setInfo(assignmentInfo);
    console.log(assignmentInfo);
  }, [assignmentInfo]);

  useEffect(() => {
    console.log(assignmentInfo);
  }, [repo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    const data = {
      student_id,
      student_name,
      assignment_id: info[0].id,
      title: info[0].title,
      totalMark: info[0].totalMark,
      createdAt: new Date().toISOString(),
      mark: 0,
      repo_link: repo,
      status: "pending",
    };

    addToAssignment(data);
    setRepo("");
  };
  return (
    show && (
      <>
        <hr
          className="mt-4"
          style={{ backgroundColor: "#35B3EE", height: "1px", border: "none" }}
        />
        <div class="w-full max-w-xs my-4 bg-transparent">
          <form
            onSubmit={handleSubmit}
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div>
              <span>Total mark of this assignment </span>
              {"    "}
              <span className="px-4 mx-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                100
              </span>
            </div>
            <div className="mb-4">
              <p className="font-bold text-slate-400 py-2 my-2">
                Enter your github repository link
              </p>
              <input
                className=" input-mark shadow appearance-none border rounded bg-transparent w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                style={{
                  marginBottom: 10,
                  borderRadius: 5,
                  color: "black",
                  padding: 5,
                }}
                placeholder="Github repository link"
                value={repo}
                onChange={(e) => setRepo(e.target.value)}
              />
            </div>

            <div class="flex items-center justify-between my-2">
              <button class="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    )
  );
};

export default AssignmentSection;
