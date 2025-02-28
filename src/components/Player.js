import React from "react";
import ReactPlayer from "react-player";

const Player = ({ url }) => (
  <div className="player">
    <ReactPlayer url={url} controls={true} width="100%" height="500px" />
  </div>
);

export default Player;
