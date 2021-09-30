import React, { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Grua() {
  const carga = useContext(AppContext);

  return (
    <div className="cuadrado container">
      <div>Container</div>
      <div>La carga es: </div>
      <svg
        height="40%"
        id="Capa_1"
        enable-background="new 0 0 507.763 507.763"
        height="200"
        viewBox="0 0 507.763 507.763"
        width="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={carga.imagen} />
      </svg>
      <div>{carga.nombre}</div>
    </div>
  );
}
