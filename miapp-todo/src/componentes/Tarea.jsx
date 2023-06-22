import { React, useState } from "react";

function Tarea({ item, onUpdate, onDelete }) {
  //item es el objeto tarea declarado como prop

  const [isEdit, setisEdit] = useState(false);

  //componente que devolverá el modo edición
  function FormEdit() {
    const [updatedvalue, setupdatedvalue] = useState(item.texto);

    function handleSubmit(e) {
      e.preventDefault();
      onUpdate(item.id, updatedvalue);
      setisEdit(false);
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setupdatedvalue(e.target.value)}
          value={updatedvalue}
          className="input-form-up"
        />
        <div className="tarea-botones">
          <button>Update</button>
        </div>
      </form>
    );
  }

  return (
    <div className="tarea">
      {isEdit ? ( //Si el modo edición está activo...
        <FormEdit /> //componente para editar
      ) : (
        <>
          <span className="tarea-texto">{item.texto}</span>
          <div className="tarea-botones">
            <button onClick={() => setisEdit(true)}>Editar</button>
            <button onClick={() => onDelete(item.id)}>Eliminar</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Tarea;
