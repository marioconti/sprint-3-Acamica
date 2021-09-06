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
    imagen: 
    "./images/hoja4.jpg",
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
        <ListadoCards />
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
// RENDERIZACION DINAMICA DE LA CARD

const ListadoCards = () => {
  const listaDeCards = arrayImagenes.map((imagenPlanta) => {
    return <Card imagenPlanta={imagenPlanta.imagen} />;
  });
  return listaDeCards;
};
//==================================================
// CARD imagen
const Card = (props) => {
  return (
    <div className="contenedor-Card">
      {/* sin mensaje de error */}
      {/* {props.imagenPlanta && (
        <img className="imagen" src={props.imagenPlanta} alt="imagen renderizada" />
      )} */}

      {!props.imagenPlanta ? (
        <h2>No se encontró la imagen</h2>
      ) : (
        <img
          className="imagen"
          src={props.imagenPlanta}
          alt="imagen renderizada"
        />
      )}
    </div>
  );
};
//==================================================