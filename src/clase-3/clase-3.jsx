import "./styles.css";
import { useState } from "react";
//Aquí tienes un listado de imagenes para que puedas construir
//tu galería
import { imagesGallery } from "./images";

export const ClaseTres = () => {
  return (
    <div className="contenedor-principal">
      <h1 className="w-100">Galeria de Imagenes</h1>
      <ImageGallery images={imagesGallery} />
    </div>
  );
};

// Card
const Card = ({ title, image }) => (
  <div className="image-card">
    <h5 className="card-text"> {title} </h5>
    <img className="card-image" src={image} title={title} alt={title} />
  </div>
);

//Galery

const ImageGallery = ({ images = [] }) => {
  const [showGalery, setShowGalery] = useState(false);
  return (
    <div className="galery-container">
      <button onClick={() => setShowGalery(!showGalery)}>
        {showGalery ? "Ocultar Galeria" : "Mostrar Galeria"}{" "}
      </button>
      {showGalery &&
        images.map((image, index) => (
          <Card title={image.title} image={image.url} key={index} />
        ))}
    </div>
  );
};
