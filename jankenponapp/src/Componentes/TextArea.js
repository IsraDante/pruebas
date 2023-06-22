import React from "react";
import Score from "./Score";

function TextArea({ text, imagenPl, imagenPC, className }) {
  return (
    <div className="text-area-container">
      <div className="text-area">
        <h3>{text}</h3>
        <div className="image-area">
          <img src={imagenPl} className={className} />
          <img src={imagenPC} className={className} />
        </div>
      </div>
    </div>
  );
}

export default TextArea;
