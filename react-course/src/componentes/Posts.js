import React from "react";
import { VscRocket } from "react-icons/vsc";

const Post = () => {
   return (
      <button
         onClick={() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
               .then((respuesta) => respuesta.json())
               .then((salida) => console.log(salida));
         }}
      >
         <VscRocket /> Get Fetch
      </button>
   );
};

function PostAsync() {
   return (
      <button
         onClick={async () => {
            try {
               const respuesta = await fetch("https://swapi.dev/api/people");
               const salida = await respuesta.json();
               console.log(salida.results.map((iterador) => console.log(iterador.name)));
            } catch (error) {
               console.log("Error:", error);
            }
         }}
      >
         <VscRocket /> Async/Await
      </button>
   );
}

export { Post, PostAsync };
