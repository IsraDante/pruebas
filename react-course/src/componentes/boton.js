import React from "react";

function Boton({ text = "Boton X", resultado }) {
   return (
      <div>
         <button onClick={resultado}>{text}</button>
      </div>
   );
}

export default Boton;
