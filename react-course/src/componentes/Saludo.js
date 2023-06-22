import React from "react";

function Saludo({ what }) {
   return <h1>Hello {what}!</h1>;
}

function Nombre(props) {
   return <h1>My name is {props.name}!</h1>;
}

function Saint({ name, age, sign, attack }) {
   return (
      <div>
         <h1>Name: {name}</h1>
         <h2>Age: {age}</h2>
         <h2>Sign: {sign}</h2>
         <ul>
            <li>Normal attack: {attack.normal}</li>
            <li>Max attack: {attack.max}</li>
         </ul>
      </div>
   );
}

export { Saludo, Nombre, Saint };
