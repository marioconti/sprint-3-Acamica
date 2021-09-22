import React from "react";
import {Route, Link } from "react-router-dom";

/*
PRIMERA PARTE 
(para estoy poner la libreria Route en la importación)
==============================================
*/

export const ToolboxClaseOcho = () => {
  return (
    <>
      <Route exact path="/">
      <Main />
      </Route>
      <Route path="/Home">
      <Home />
      </Route>
    </>
  );
};

const Main = () => {
  return (
    <>
      <h2>Main</h2>
      <Link to="/home">Go to Home</Link>
    </>
  );
};

const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <Link to="/">Go to Main</Link>
    </>
  );
};