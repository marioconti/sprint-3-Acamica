import React, { createContext } from "react";
import { carga } from "./carga";

export const AppContext = createContext();

export const AppProvider = (props) => {
  return (
    <AppContext.Provider value={carga}>{props.children}</AppContext.Provider>
  );
};
