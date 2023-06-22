import React from "react";
import { useState } from "react";

function Counter() {
   const [contador, setContador] = useState(0);
   return (
      <div>
         <h1>Counter:{contador} </h1>
         <button
            onClick={() => {
               setContador(contador === 10 ? 0 : contador + 1);
            }}
         >
            Incrementar
         </button>
         <button
            onClick={() => {
               setContador(contador === 0 ? 10 : contador - 1);
            }}
         >
            Decrementar
         </button>
      </div>
   );
}

export default Counter;
