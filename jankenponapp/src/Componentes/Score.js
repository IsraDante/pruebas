import React from "react";

function Score({ ScoreName, Score }) {
  return (
    <div>
      <h3>
        {ScoreName}: {Score}
      </h3>
    </div>
  );
}

export default Score;
