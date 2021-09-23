import React from "react";
import "./challenge-9.css";
import { Route, Link } from "react-router-dom";

export const ChallengeClaseNueve = () => {
  return (
    <>
      {/* con path declaro el nombre de la ruta y luego eso ponemos en el link? */}
      <div className="contenedor-principal">
        <Route exact path="/">
          <Inicio />
          <BotonesPlanta1 />
          <BotonesPlanta2 />
          <BotonesPlanta3 />
          <BotonesPlanta4 />
        </Route>

        <Route path="/Plantas1">
          <Plantas1 />
        </Route>
        <Route path="/Plantas2">
          <Plantas2 />
        </Route>
        <Route path="/Plantas3">
          <Plantas3 />
        </Route>
        <Route path="/Plantas4">
          <Plantas4 />
        </Route>
      </div>
    </>
  );
};

// COMPONENTE PRINCIPAL
const Inicio = () => {
  return <h1>Bienvenidos!</h1>;
};

// ===================================
// COMPONENTES DE CADA PAGINA
const Plantas1 = () => {
  return (
    <div className="contenedor-planta">
      <h1>PLANTA 1</h1>
      <img src="../../images/hoja1.jpg" alt="Planta" />
      <div className="contenedor-botones">
        <BotonesPlanta2 />
        <BotonesPlanta3 />
        <BotonesPlanta4 />
        <BotonInicio />
      </div>
    </div>
  );
};

const Plantas2 = () => {
  return (
    <div className="contenedor-planta">
      <h1>PLANTA 2</h1>
      <img src="../../images/hoja2.jpg" alt="Planta" />
      <div className="contenedor-botones">
        <BotonesPlanta1 />
        <BotonesPlanta3 />
        <BotonesPlanta4 />
        <BotonInicio />
      </div>
    </div>
  );
};

const Plantas3 = () => {
  return (
    <div className="contenedor-planta">
      <h1>PLANTA 3</h1>
      <img src="../../images/hoja3.jpg" alt="Planta" />
      <div className="contenedor-botones">
        <BotonesPlanta1 />
        <BotonesPlanta2 />
        <BotonesPlanta4 />
        <BotonInicio />
      </div>
    </div>
  );
};

const Plantas4 = () => {
  return (
    <div className="contenedor-planta">
      <h1>PLANTA 4</h1>
      <img src="../../images/hoja4.jpg" alt="Planta" />
      <div className="contenedor-botones">
        <BotonesPlanta1 />
        <BotonesPlanta2 />
        <BotonesPlanta3 />
        <BotonInicio />
      </div>
    </div>
  );
};

// BOTON GENERICO
const BotonLink = (props) => {
  return (
    <>
      <div className="btn">
        <button>
          <Link className="link" to={props.link}>
            {props.nombreLink}
          </Link>
        </button>
      </div>
    </>
  );
};
// ===================================
// BOTONES PARA CADA LINK DE CADA PAGINA
const BotonesPlanta1 = () => {
  // En el link ponemos la el nombre de la ruta que pusimos en el path=""
  return <BotonLink link={"/Plantas1"} nombreLink={"Planta 1"} />;
};
const BotonesPlanta2 = () => {
  return <BotonLink link={"/Plantas2"} nombreLink={"Planta 2"} />;
};
const BotonesPlanta3 = () => {
  return <BotonLink link={"/Plantas3"} nombreLink={"Planta 3"} />;
};
const BotonesPlanta4 = () => {
  return <BotonLink link={"/Plantas4"} nombreLink={"Planta 4"} />;
};
const BotonInicio = () => {
  return <BotonLink link={"/"} nombreLink={"Inicio"} />;
};
// ===================================
