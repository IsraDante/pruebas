import React from "react";

function Button({ eleccion, handleChoice, className, disabled, imagen }) {
  return (
    <button className={className} onClick={handleChoice} disabled={disabled} eleccion={eleccion}>
      <img src={imagen} alt="imagen" className="iconito" />
    </button>
  );
}

export default Button;
