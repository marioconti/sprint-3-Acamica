import React from "react";
import { Link } from "react-router-dom";

export const Navegacion = () => {
  return (
    <>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/cursos">Cursos</Link>
      </div>
    </>
  );
};
