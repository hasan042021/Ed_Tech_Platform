import React from "react";
import playerLogo from "../assets/image/player.svg";

const Blank = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <img height={64} width={64} src={playerLogo} alt="" srcset="" />
      </div>
      <p className="text-gray-400 text-xs mt-3">
        No video selected right now. Click a video from the video list on the
        right.
      </p>
    </div>
  );
};

export default Blank;
