import React from "react";
import "./estilos-3.css";

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
const Header = () => {
  return (
    <div className="header">
      Menú vertical
      <div>Sub titulo</div>
    </div>
  );
};

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

const Seccion = () => {
  return (
    <div className="seccion">
      Seccion
      <div>Sub titulo</div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      Footer
      <div>Sub titulo</div>
    </div>
  );
};
