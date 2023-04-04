import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useGetVideosQuery } from "../../features/videos/videosApi";
import VideoItem from "./VideoItem";

const VideoItems = () => {
  const { data: videos, isLoading, isError, error } = useGetVideosQuery();

  //decide what to render
  let content = null;
  if (isLoading) {
    content = (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
  return (
    <>
      {videos?.map((video) => (
        <VideoItem video={video} />
      ))}
    </>
  );
};

export default VideoItems;
