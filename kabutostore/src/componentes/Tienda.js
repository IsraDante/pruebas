import { useContext } from "react";
import SSList from "../data/SSlist";
import SFList from "../data/SF";
import DBalllist from "../data/DB";
import NarutoList from "../data/Naruto";
import OPList from "../data/OPList";
import "../HojasEstilo/Tienda.css";
import Banner from "./Banner";
import { ShopContext } from "../context/ShopContext";
import Cart from "./Cart";
import NavSelect from "./NavSelect";
import Lista from "./Lista";
import InfoFooter from "./InfoFooter";

function Tienda() {



  const { addToCart, isVisible, cartItems, searchValue, addFavoritos, categoryItem } = useContext(ShopContext);

  return (
    <div className="all-container">
      <Banner />

      {isVisible && cartItems.length > 0 ? <Cart /> : null}
      {<NavSelect />}

      {categoryItem === "One Piece" || categoryItem === "" || searchValue ? (
        <Lista listaItems={OPList} addFavoritos={addFavoritos} addToCart={addToCart} searchValue={searchValue} />
      ) : null}

      {categoryItem === "Saint Seiya" || categoryItem === "" ? (
        <Lista listaItems={SSList} addFavoritos={addFavoritos} addToCart={addToCart} searchValue={searchValue} />
      ) : null}

      {categoryItem === "Street Fighter" || categoryItem === "" || searchValue ? (
        <Lista listaItems={SFList} addFavoritos={addFavoritos} addToCart={addToCart} searchValue={searchValue} />
      ) : null}

      {categoryItem === "Dragon Ball" || categoryItem === "" || searchValue ? (
        <Lista listaItems={DBalllist} addFavoritos={addFavoritos} addToCart={addToCart} searchValue={searchValue} />
      ) : null}

      {categoryItem === "Naruto" || categoryItem === "" || searchValue ? (
        <Lista listaItems={NarutoList} addFavoritos={addFavoritos} addToCart={addToCart} searchValue={searchValue} />
      ) : null}

      <InfoFooter />
    </div>
  );
}

export default Tienda;
