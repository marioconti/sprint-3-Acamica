import React from "react";
import { Home } from "./home";
import { Cursos } from "./curso";
import { Eventos } from "./evento";
import { Route } from "react-router-dom";

export const Principal = () => {
  return (
    <>
      <div className="section-principal">
        <Route component={Home} exact path="/" />
        <Route component={Cursos} exact path="/cursos" />
        <Route component={Eventos} exact path="/eventos" />
      </div>
    </>
  );
};
