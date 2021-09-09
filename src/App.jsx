import React, { useEffect } from "react";
import "./App.css";
import { Container } from "./container/Container";

export default function App() {
  useEffect(() => {
    console.log(`El componente ha sido montado en el DOM.`);
  }, []);
  return (
    <div className="App">
      <Container />
    </div>
  );
}
