import React, { useContext } from "react";
import "../HojasEstilo/NavSelector.css";
import DragonBallLogo from "../imagenes/Dragonball.png";
import SaintSeiyaLogo from "../imagenes/saintseiya.png";
import OnePieceLogo from "../imagenes/onepiece.png";
import NarutoLogo from "../imagenes/naruto.png";
import SFLogo from "../imagenes/sfighter.png";
import { ShopContext } from "../context/ShopContext";

function NavSelect() {
  const { setCategory } = useContext(ShopContext);

  return (
    <div className="navselector">
      <button onClick={() => setCategory("Dragon Ball")}>
        <img src={DragonBallLogo} alt="Dragon Ball Logo" className="logo" />
      </button>
      <button onClick={() => setCategory("Saint Seiya")}>
        <img src={SaintSeiyaLogo} alt="Saint Seiya Logo" className="logo" />
      </button>
      <button onClick={() => setCategory("One Piece")}>
        <img src={OnePieceLogo} alt="One Piece Logo" className="logo" />
      </button>
      <button onClick={() => setCategory("Naruto")}>
        <img src={NarutoLogo} alt="Naruto Logo" className="logo" />
      </button>
      <button onClick={() => setCategory("Street Fighter")}>
        <img src={SFLogo} alt="Street Fighter Logo" className="logo" />
      </button>
    </div>
  );
}

export default NavSelect;
