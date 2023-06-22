import React from "react";
import "../hojas-estilo/Task.css";

function Task(props) {
   return (
      <div className={props.realizada ? "targeta-contenedor realizada" : "targeta-contenedor"}>
         <h1>Mi primera Tarea</h1>
         <p>{props.realizada ? "Tarea realizada" : "Tarea pendiente"}</p>
      </div>
   );
}

export default Task;
