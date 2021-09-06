import React, { useState } from "react";
import "./cuadrado.css";

export const ChallengeClaseCuatro = () => {
  return (
    <>
      <h1>Challenge clase 4</h1>
      <div className="contenedor-cuadrado">
        <CambioDeFondo />
      </div>
      <div className="contenedor-pizzas">
        <Pizza salsa={true} />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
      </div>
    </>
  );
};
// Micro challenge
const CambioDeFondo = () => {
  const [fondoActual, setFondo] = useState(false);

  let estiloDinamico = fondoActual ? "fondoClaro" : "fondoOscuro";

  const handleChange = () => {
    setFondo(!fondoActual);
  };
  return (
    <>
      <div className={`cuadrado ${estiloDinamico}`}></div>
      <input checked={fondoActual} type="checkbox" onChange={handleChange} />
    </>
  );
};

// ===============================================================
const Pizza = (props) => {
  const Condimentos = () => {
    let condimentos = ["pizza"];
    if (props.salsa === true) {
      condimentos.push("pizza-ConSalsa");
    }
    let tiposDeCondimentos = condimentos.join("");
    return tiposDeCondimentos;
  };
  return <div className={`${Condimentos()}`} />;
};
