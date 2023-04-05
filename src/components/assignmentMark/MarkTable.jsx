import React from "react";
import Error from "../ui/Error";
import Loader from "../ui/Loader";
import IndividulsMark from "./IndividulsMark";

const MarkTable = ({ result }) => {
  const { data, isLoading, isError, error } = result || {};

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
      <div className="overflow-x-auto mt-4">
        <table className="divide-y-1 text-base divide-gray-600 w-full">
          <thead>
            <tr>
              <th className="table-th">Assignment</th>
              <th className="table-th">Date</th>
              <th className="table-th">Student Name</th>
              <th className="table-th">Repo Link</th>
              <th className="table-th">Mark</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-600/50">
            {data?.map((submission) => (
              <IndividulsMark details={submission} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return content;
};

export default MarkTable;
