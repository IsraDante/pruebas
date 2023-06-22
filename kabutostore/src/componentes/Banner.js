import React, { useState, useEffect } from "react";
import "../HojasEstilo/Banner.css";
import Banner1 from "../imagenes/BANNER1.jpg";
import Banner2 from "../imagenes/BANNER2.jpg";
import Banner3 from "../imagenes/BANNER3.jpg";
import Banner4 from "../imagenes/BANNER4.jpg";
import Banner5 from "../imagenes/BANNER5.png";

function Banner() {
  const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedImage((currentImage) => {
        const index = images.indexOf(currentImage);
        // Si la imagen actual no está en el array, o si es la última imagen, volvemos a la primera imagen.
        if (index === -1 || index === images.length - 1) {
          return images[0];
        } else {
          // De lo contrario, avanzamos a la siguiente imagen.
          return images[index + 1];
        }
      });
    }, 4000);

    // Esto se ejecutará cuando el componente se desmonte, y limpiará el intervalo.
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="banner">
      <img alt="imagen" src={selectedImage} />
    </div>
  );
}

export default Banner;
