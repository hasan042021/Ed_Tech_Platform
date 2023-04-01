import React from "react";
import VideoItem from "./VideoItem";

const VideoItems = () => {
  return (
    <tbody className="divide-y divide-slate-600/50">
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </tbody>
  );
};

export default VideoItems;
