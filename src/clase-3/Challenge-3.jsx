import React from "react";
import "./estilos-3.css";

const arrayImagenes = [
  {
    imagen: "./images/hoja1.jpg",
  },
  {
    imagen: "./images/hoja2.jpg",
  },
  {
    imagen: "./images/hoja3.jpg",
  },
  {
    imagen: "./images/hoja4.jpg",
  },
  {
    imagen: "./images/hoja5.jpg",
  },
];

//==================================================
export const ChallengeClaseTres = () => {
  return (
    <>
      <div className="contenedor-principal">
        <Header />
        <Cuerpo />
      </div>
    </>
  );
};

//==================================================
// HEADER
const Header = () => {
  return (
    <div className="header">
      Menú vertical
      <div>Sub titulo</div>
    </div>
  );
};
//==================================================
// CUERPO
const Cuerpo = () => {
  return (
    <>
      <div className="seccion-columna">
        <Seccion />
        <Footer />
      </div>
    </>
  );
};
//==================================================
// SECCION/RESULTADOS
const Seccion = () => {
  return (
    <div className="seccion">
      <h1>Secciónn</h1>
      <h2>Subtitulo</h2>
      <div className="seccion-galeria">
        <Card imgSrc={arrayImagenes[0].imagen} />
        <Card imgSrc={arrayImagenes[1].imagen} />
        <Card imgSrc={arrayImagenes[2].imagen} />
        <Card imgSrc={arrayImagenes} />
        <Card imgSrc={arrayImagenes[4].imagen} />
      </div>
    </div>
  );
};
//==================================================
// FOOTER
const Footer = () => {
  return (
    <div className="footer">
      Footer
      <div>Sub titulo</div>
    </div>
  );
};
//==================================================
// CARD
// FIXME: arreglar la logica para q no muestre nada cuando no está la imagen o cuando no se encuentra la imagen
const Card = (props) => {
  return (
    <div className="contenedor-Card">
      {/* sin mensaje de error */}
      {/* {props.imgSrc && (
        <img className="imagen" src={props.imgSrc} alt="imagen renderizada" />
      )} */}

      {!props.imgSrc ? (
        <h2>No se encontró la imagen</h2>
      ) : (
        <img className="imagen" src={props.imgSrc} alt="imagen renderizada" />
      )}
    </div>
  );
};
