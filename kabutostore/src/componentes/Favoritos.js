import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import "../HojasEstilo/Favoritos.css";

function Favoritos() {
  const { favoritos, removeFromFavoritos, addToCart } = useContext(ShopContext);

  return (
    <div className="favoritos-container">
      <h2 className="tus-favoritos">Tus Favoritos</h2>
      {favoritos.length > 0 ? (
        favoritos.map((item) => (
          <div className="individual-container">
            <img src={item.image} alt="imagen" />
            <div className="footer-container">
              <p>{item.description}</p>
              <p className="price-container">{item.price}€</p>
              <div className="botones-container">
                <button className="boton-comprar" onClick={() => addToCart(item.id)}>
                  Comprar
                </button>
                <button className="boton-eliminar" onClick={() => removeFromFavoritos(item.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No tienes ningún favorito aún.</p>
      )}
      <Link to="/" className="link-style">
        <h2>Volver</h2>
      </Link>
    </div>
  );
}

export default Favoritos;
