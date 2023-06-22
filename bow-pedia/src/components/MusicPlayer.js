import React from "react";
import Music from "../music/Stables.mp3";

function MusicPlayer() {
  return (
    <div className="reproductor">
      <audio controls autoPlay>
        <source src={Music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default MusicPlayer;
