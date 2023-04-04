import React from "react";
import { useGetVideosQuery } from "../../features/videos/videosApi";
import Error from "../ui/Error";
import Loader from "../ui/Loader";
import SingleVideo from "./singleVideo";

const VideoTable = () => {
  const { data, isLoading, isError, error } = useGetVideosQuery();

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
            <th className="table-th">Video Title</th>
            <th className="table-th">Description</th>
            <th className="table-th">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-600/50">
          {data?.map((video) => (
            <SingleVideo info={video} />
          ))}
        </tbody>
      </table>
    );
  }
  return content;
};

export default VideoTable;
