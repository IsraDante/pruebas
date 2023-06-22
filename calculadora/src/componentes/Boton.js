import React from "react";
import "../hojas-estilo/Boton.css";

function Boton(props) {
   const esOperador = (valor) => {
      return isNaN(valor) && valor !== "." && valor != "=";
   };

   return (
      <div
         className={`boton-contenedor ${esOperador(props.numero) ? "operador" : ""}`.trimEnd()}
         onClick={() => props.manejarClic(props.numero)}
      >
         {props.numero}
      </div>
   );
}

export default Boton;
