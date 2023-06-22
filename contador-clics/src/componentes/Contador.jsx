import React from "react";
import "../hojas-estilo/Contador.css";

function Contador(props) {
   return <div className="contador">{props.numClics}</div>;
}

export default Contador;
