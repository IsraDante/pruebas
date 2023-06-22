import React from "react";
import "../HojasEstilo/Info.css";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Goku from "../imagenes/Goku.png";

function InfoFooter() {
  return (
    <div className="info-container">
      <div className="logostore">
        <h2>
          Kabuto <span className="Store-title">Store</span>
        </h2>
        <h2 className="katakana">彼武人</h2>
      </div>
      <div className="contacto">
        <h3>/Contacto/</h3>
        <div className="location">
          <IoLocationOutline size={25} className="location-icon" />
          <h4>Av/Monte-Fuji, 42 (Barcelona)</h4>
        </div>
        <div className="contact-number">
          <BsTelephone size={25} className="phone-icon" />
          <h4>(+34) 656677889 (Whatsapp)</h4>
        </div>
        <div className="contact-number">
          <FiMail size={25} className="mail-icon" />
          <h4>KabutoStore@kabutomail.es</h4>
        </div>
        <div className="goku-container">
          <img alt="imagen" src={Goku} className="goku-img" />
        </div>
      </div>
      <div className="webmaster">
        <h6>by ©DanteDesign 2023</h6>
      </div>
    </div>
  );
}

export default InfoFooter;
