import "./App.css";
import React_logo from "./imagenes/React_logo.png";
import Boton from "./componentes/Boton";
import CalcuLogo from "./imagenes/CalcuLogo.png";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";
import HadokenSound from "./sonidos/Hadoken.mp3";
import Uaa from "./sonidos/Uaa.mp3";
import CoinSound from "./sonidos/Coin.mp3";
import { useRef } from "react";

function App() {
   const Hadoken = useRef(null);
   const Scream = useRef(null);
   const Coin = useRef(null);

   const [input, setInput] = useState("");

   function agregarNum(num) {
      Coin.current.currentTime = 0;
      Coin.current.play();

      return setInput(input + num);
   }

   function Clear() {
      Scream.current.play();
      return setInput("");
   }

   function calcularResultado() {
      Hadoken.current.play();
      if (input) {
         // Validar que el input no tenga operaciones matemáticas seguidas (+-*)
         const regex = /[\+\-\*]{2,}/;

         if (regex.test(input)) {
            alert("Operaciones encadenadas no son permitidas");
         }

         return setInput(evaluate(input));
      } else {
         alert("Ingrese valores para realizar el cálculo");
      }
   }

   return (
      <div className="App">
         <div className="logo-contenedor">
            <img src={React_logo} className="logo" alt="logo calculadora" />
         </div>
         <div className="contenedor-calculadora">
            <div className="contenedor-pocketlogo">pocket operator PO-133</div>
            <img className="CalcuLogo" src={CalcuLogo} alt="CalcuLogo" />
            <Pantalla input={input} />
            <div className="fila">
               <Boton numero="1" manejarClic={agregarNum} />
               <Boton numero="2" manejarClic={agregarNum} />
               <Boton numero="3" manejarClic={agregarNum} />
               <Boton numero="+" manejarClic={agregarNum} />
            </div>
            <div className="fila">
               <Boton numero="4" manejarClic={agregarNum} />
               <Boton numero="5" manejarClic={agregarNum} />
               <Boton numero="6" manejarClic={agregarNum} />
               <Boton numero="-" manejarClic={agregarNum} />
            </div>
            <div className="fila">
               <Boton numero="7" manejarClic={agregarNum} />
               <Boton numero="8" manejarClic={agregarNum} />
               <Boton numero="9" manejarClic={agregarNum} />
               <Boton numero="*" manejarClic={agregarNum} />
            </div>
            <div className="fila">
               <Boton numero="=" manejarClic={calcularResultado} />
               <Boton numero="0" manejarClic={agregarNum} />
               <Boton numero="." manejarClic={agregarNum} />
               <Boton numero="/" manejarClic={agregarNum} />
            </div>
            <div className="fila">
               <BotonClear manejarClear={Clear}>Clear</BotonClear>
            </div>
            <div className="capcom">CAPCOM</div>
            <div>
               <audio ref={Hadoken} src={HadokenSound} />
               <audio ref={Scream} src={Uaa} />
               <audio ref={Coin} src={CoinSound} />
            </div>
         </div>
      </div>
   );
}

export default App;
