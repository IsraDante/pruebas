import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Cargar inicialmente el texto desde localStorage o usar una cadena vacía si no está presente
  const [text, setText] = useState(localStorage.getItem("text") || "");
  const [twitts, setTwitts] = useState([]);
  const [clicked, setClicked] = useState(false);

  function save() {
    // Cuando se llama a la funcion, guarda 'text' con el valor text en localStorage
    localStorage.setItem("text", text);
    setTwitts((prevValue) => [...prevValue, text]);
  }

  function getTwitts() {
    setClicked(!clicked);
  }

  return (
    <div className="App">
      <div className="text-area">
        <textarea placeholder="¿Qué está pasando?" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={save}>Add Twitt</button>
        <button className="twittlist" onClick={getTwitts}>
          Twitt List
        </button>
        <div className={clicked ? "list-area" : "list-area-hidden"}>
          {twitts.map((twitt) => (
            <div className="twitt">
              <p>Twitt: {twitt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
