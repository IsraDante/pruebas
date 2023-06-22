import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import "../HojasEstilo/Details.css";

function ItemDetail() {
  const { itemDetails } = useContext(ShopContext);

  return (
    <div className="contenedor-grande">
      <div className="details-container">
        <img src={itemDetails.image} />
        <div class="infor-container">
          <h3>Serie de Figuras: {itemDetails.category}</h3>
          <p className="infor-general">{itemDetails.description}</p>
          <p>{itemDetails.details}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
