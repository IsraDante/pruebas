import React from "react";

function ResetButton({ resetGame, className }) {
  return (
    <div>
      <button onClick={resetGame} className={className}>
        Volver a jugar
      </button>
    </div>
  );
}

export default ResetButton;
