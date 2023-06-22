import { useState } from "react";
import "./App.css";
import Tarea from "./componentes/Tarea";

function App() {
  const [valor, setValor] = useState("");
  const [tarea, setTarea] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const nuevaTarea = {
      id: Math.floor(Math.random() * 2000),
      texto: valor, // Usar el valor del input
      completed: false,
    };
    setTarea([...tarea, nuevaTarea]);
    setValor("");
  }

  function handleUpdate(id, updatedvalue) {
    //nos traemos los argumentos
    const tareaUpdated = tarea.find((item) => item.id === id);
    tareaUpdated.texto = updatedvalue;
    setTarea([...tarea]);
  }

  function handleDelete(id) {
    const tareasfiltradas = tarea.filter((item) => item.id !== id);
    setTarea(tareasfiltradas);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Añade una tarea"
          onChange={(e) => setValor(e.target.value)}
          value={valor}
          className="input-form"
        />
        <button className="form-button">Añadir</button>
      </form>
      {tarea.map((tareaIt) => {
        return (
          <Tarea
            item={tareaIt}
            key={tareaIt.id}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default App;
