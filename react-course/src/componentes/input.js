import { useState } from "react";

function Input() {
   const [mensaje, setMensaje] = useState("");
   const [counter, setCounter] = useState(0);

   return (
      <div>
         <input onChange={(e) => setMensaje(e.target.value)}></input>
         <button onClick={() => alert("El mensaje es : " + mensaje)}>Save</button>
         <hr />
         <h3>Count {counter}</h3>
         <button onClick={setCounter(counter + 1)}>Suma</button>
      </div>
   );
}

export default Input;
