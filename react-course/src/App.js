import "./App.css";
import { Saint } from "./componentes/Saludo";
import Boton from "./componentes/boton";
import TaskCard from "./componentes/Task";
import { useState } from "react";
import { Post, PostAsync } from "./componentes/Posts";
import Robots from "./componentes/array";
import Counter from "./componentes/contador";
import Input from "./componentes/input";

function App() {
   const [resultadoRandom /*variable*/, setResultadoRandom /*funcion*/] = useState(null);

   function GetRandom() {
      let Num = Math.floor(Math.random() * 200);

      setResultadoRandom(Num);
   }

   const [value, setValue] = useState("");

   return (
      <div className="Contenedor">
         <div>
            <Saint
               name="Ikki"
               age="28"
               sign="Phoenix"
               attack={{ normal: "Ghost Fist", max: "Phoenix Vision" }}
            />
         </div>
         <Boton text="Button Num Random" resultado={GetRandom} />
         <div>
            <div>Your random number is {resultadoRandom}</div>
            <TaskCard realizada={true} />
         </div>
         <div>
            <input
               type="text"
               placeholder="Escribe algo"
               onChange={(e) => setValue(e.target.value)}
            />
            {value}
         </div>
         <div>
            <input
               type="text"
               onBlur={(e) =>
                  e.target.value < 10 ? alert("El número ha de ser mayor a 10") : e.target.value
               }
            />
         </div>
         <>
            <input type="text" onFocus={() => alert("¡Hola!")} placeholder="Si clicas te saludo" />
         </>
         <>
            <form
               onSubmit={(e) => {
                  e.preventDefault();
                  console.log("enviando datos...");
               }}
            >
               <button>Submmit</button>
            </form>
         </>
         <div>
            <Post />
         </div>
         <div>
            <PostAsync />
         </div>
         <>
            {Robots.map((robot) => (
               <div>
                  <h1>Id: {robot.id}</h1>
                  <h1>Name: {robot.name}</h1>
                  <h2>Model: {robot.model}</h2>
                  {/*    <img src={robot.image} /> */}
               </div>
            ))}
         </>
         <Counter />
         <>{/*   <Input /> */}</>
      </div>
   );
}

export default App;
