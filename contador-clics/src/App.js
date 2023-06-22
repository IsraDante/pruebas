import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {
   const [numClics, setNumClics] = useState(0);

   const manejarClic = () => {
      setNumClics(numClics + 1);
   };

   const reloadContador = () => {
      setNumClics(0);
   };

   return (
      <div className="App">
         <div className="logo-contenedor">
            <img
               className="sf_logo"
               src={require("../src/img/Fight.png")}
               alt="logo de SF"
            />
         </div>
         <div className="contenedor-contadorYbotones">
            <Contador numClics={numClics} />

            <div className="contenedor-contador">
               <Boton texto="Hit" esBotonDeClic={true} manejarClic={manejarClic} />
               <Boton texto="Reload" esBotonDeClic={false} manejarClic={reloadContador} />
            </div>
         </div>
      </div>
   );
}

export default App;
