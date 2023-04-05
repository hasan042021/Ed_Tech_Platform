import React from "react";
import { useGetAssignmentsQuery } from "../../features/assignments/assignmentsApi";
import Error from "../ui/Error";
import Loader from "../ui/Loader";
import AssignmentItem from "./AssignmentItem";

const AssignmentTable = () => {
  const { data, isLoading, isError, error } = useGetAssignmentsQuery();
  // decide what to render
  let content = null;
  if (isLoading) {
    content = <Loader />;
  }
  if (!isLoading && isError) {
    content = <Error>{error?.data}</Error>;
  }
  if (!isLoading && !isError && data.length === 0) {
    content = <div>No videos found!</div>;
  }
  if (!isLoading && !isError && data.length > 0) {
    content = (
      <table className="divide-y-1 text-base divide-gray-600 w-full">
        <thead>
          <tr>
            <th className="table-th">Title</th>
            <th className="table-th">Video Title</th>
            <th className="table-th">Mark</th>
            <th className="table-th">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-600/50">
          {data?.map((assingment) => (
            <AssignmentItem details={assingment} />
          ))}
        </tbody>
      </table>
    );
  }
  return <>{content}</>;
};

export default AssignmentTable;
