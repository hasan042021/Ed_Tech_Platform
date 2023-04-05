import React from "react";
import { useGetAllQuizzesQuery } from "../../features/quizzes/quizzesApi";
import QuizzesItem from "../quizzes/QuizzesItem";
import Error from "../ui/Error";
import Loader from "../ui/Loader";

const QuizzesTable = () => {
  const { data, isLoading, isError, error } = useGetAllQuizzesQuery();
  //decide what to render
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
            <th className="table-th">Question</th>
            <th className="table-th">Video</th>
            <th className="table-th justify-center">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-600/50">
          {data?.map((quiz) => (
            <QuizzesItem details={quiz} />
          ))}
        </tbody>
      </table>
    );
  }
  return <>{content}</>;
};

export default QuizzesTable;
