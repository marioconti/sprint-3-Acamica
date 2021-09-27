import React from "react";
import "./challenge-10.css";
import { Route } from "react-router-dom";
import { Main } from "../clase-10/main";
import { Home } from "../clase-10/home";
import { Profile } from "../clase-10/profile";

export const ChallengeDiez = () => {
  return (
    <>
      <div className="contenedor-principal">
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/users/:username">
          <Profile />
        </Route>
      </div>
    </>
  );
};
