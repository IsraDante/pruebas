import React from "react";
import { BiHeart } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function Lista({ addFavoritos, addToCart, listaItems, searchValue }) {
  const { favoritos, getDetail } = useContext(ShopContext);

  //saber si el item está en el array de favoritos
  function findIsInFavoritos(id) {
    const itemFind = favoritos.find((item) => item.id === id);
    return itemFind;
  }

  return (
    <div className="items-container">
      {listaItems
        .filter((item) => item.description.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item) => {
          return (
            <div key={item.id} className="item">
              <Link to={"./itemdetails"} onClick={() => getDetail(item.id)}>
                <img src={item.image} alt="imagen" />
              </Link>
              <p>{item.description}</p>
              <div className="footer">
                <p className="price">{item.price}€</p>
                <div className="botones-container">
                  <button className="boton-favoritos" onClick={() => addFavoritos(item.id)}>
                    {findIsInFavoritos(item.id) ? <AiFillHeart /> : <BiHeart />}
                  </button>
                  <button className="boton-comprar" onClick={() => addToCart(item.id)}>
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Lista;
