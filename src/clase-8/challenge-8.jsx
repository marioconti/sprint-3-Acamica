import React from "react";
import "./challenge-8.css";
import { Route, Link } from "react-router-dom";

export const ChallengeClaseOcho = () => {
  return (
    <>
      {/* con path declaro el nombre de la routa y luego eso ponemos en el link? */}
      <div className="contenedor-principal">
        <Route exact path="/">
          <Inicio />
          <Botones />
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

const Inicio = () => {
  return <h1>Bienvenidos!</h1>;
};

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

const Botones = () => {
  return (
    <div className="contenedor-botones">
      <BotonLink link={"/"} nombreLink={"Inicio"} />
      <BotonLink link={"/Plantas1"} nombreLink={"Planta 1"} />
      <BotonLink link={"/Plantas2"} nombreLink={"Planta 2"} />
      <BotonLink link={"/Plantas3"} nombreLink={"Planta 3"} />
      <BotonLink link={"/Plantas4"} nombreLink={"Planta 4"} />
    </div>
  );
};

const Plantas1 = () => {
  return (
    <div className="contenedor-planta">
      <h1>PLANTA 1</h1>
      <img src="../../images/hoja1.jpg" alt="Planta" />
      <Botones />
    </div>
  );
};

const Plantas2 = () => {
  return (
    <div className="contenedor-planta">
      <h1>PLANTA 2</h1>
      <img src="../../images/hoja2.jpg" alt="Planta" />
      <Botones />
    </div>
  );
};

const Plantas3 = () => {
  return (
    <div className="contenedor-planta">
      <h1>PLANTA 3</h1>
      <img src="../../images/hoja3.jpg" alt="Planta" />
      <Botones />
    </div>
  );
};

const Plantas4 = () => {
  return (
    <div className="contenedor-planta">
      <h1>PLANTA 4</h1>
      <img src="../../images/hoja4.jpg" alt="Planta" />
      <Botones />
    </div>
  );
};
