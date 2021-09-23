import React, { useState, useEffect } from "react";
import "./clase-8.css";
import { useInputData } from "./customHook";

export const ClaseOcho = () => {
  return (
    <div className="App centered column">
      <LoginCard />
    </div>
  );
};

function LoginCard() {
  //   const [username, actualizarUsername] = useState("");
  //   const [password, actualizarPassword] = useState("");
  //   const [name, actualizarName] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // funcion que reseteará el valor del width
    const ManejarResize = () => {
      setWidth(window.innerWidth);
      console.log(window.innerWidth);
    };
    // segundo paso agregamos un evento que escuche en que tamaño está el width
    // colocamos dos parametros, e invocamos la fx manejar cambio como una variable. Esto se ejecturá cuando se active el resize, es decir cuando cambie de valor el width
    // La función manejar cambio se ejecturá entonces cuando el resize se active
    window.addEventListener("resize", () => ManejarResize);
  }, []);

  //   const manejarCambioUsername = (e) => {
  //     actualizarUsername(e.target.value);
  //   };
  //   const manejarCambioPassword = (e) => {
  //     actualizarPassword(e.target.value);
  //   };
  //   const manejarCambioName = (e) => {
  //     actualizarName(e.target.value);
  //   };


//   Ya no necesitamos los estados porque se estarán definiendo en la función del custom hook
// ¿FIXME: no entiendo bien que está pasando aquí? Es un destructuring?
// Por que le pasamos un string vacio?(es porque es un tipo texto lo que irá dentro? y si es otra cosa? o numero y letras (tomará todo como un string?)?)
  let name = useInputData("");
  let userName = useInputData("");
  let password = useInputData("");

  return (
    <div className="flex-container centered">
      <div className={width > 400 ? "card" : "mobile-card"}>
        <div className="inputContainer">
          <input
        //   el custom hook retorna un objeto con propiedades. El useInput data que cree retorna valores del valor inicial del estado en InputData y una función que maneja el cambio
            autoComplete="off"
            value={name.inputData}
            onChange={name.manejarCambio}
            placeholder="name"
            name="name"
            type="text"
          />
        </div>
        <div className="inputContainer">
          <input
            autoComplete="off"
            value={userName.inputData}
            onChange={userName.manejarCambio}
            placeholder="username"
            name="username"
            type="text"
          />
        </div>
        <div className="inputContainer">
          <input
            autoComplete="off"
            value={password.inputData}
            onChange={password.manejarCambio}
            placeholder="password"
            name="password"
            type="text"
          />
        </div>
        <button disabled className="btn">
          Crear cuenta
        </button>
      </div>
    </div>
  );
}
