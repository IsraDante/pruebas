import React, { useContext } from "react";
import "../HojasEstilo/NavBar.css";
import { BiCartAlt } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { SiGooglehome } from "react-icons/si";

function NavBar() {
  //estamos importando funciones desde el contexto ShopContext
  const { updateItemCount, showCartItems, setSearchValue, favoritos, cartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="links">
        <Link to="./">
          <button className="home">
            <SiGooglehome size={28} />
          </button>
        </Link>
        <h2>
          Kabuto <span className="Store-title">Store</span>
        </h2>
        <h2 className="katakana">彼武人</h2>
        <input type="text" placeholder="Busca tu figura" onChange={(e) => setSearchValue(e.target.value)} />
        <h3>Tu Cesta</h3>
        <button className="boton-carrito" onClick={showCartItems}>
          <BiCartAlt size={28} className={cartItems.length > 0 ? "carrito-imagen-full" : "carrito-imagen"} />
        </button>
        <span>
          <h3 className="cantidad">({updateItemCount()})</h3>
        </span>
        <button className="boton-corazon">
          <Link to="/favoritos">
            <BiHeart size={28} className={favoritos.length > 0 ? "corazon-imagen-full" : "corazon-imagen"} />
          </Link>
        </button>
        <h3 className="favoritos">Favoritos</h3>
        <h3 className="cantidad-favoritos">({favoritos.length})</h3>
      </div>
    </div>
  );
}

export default NavBar;
