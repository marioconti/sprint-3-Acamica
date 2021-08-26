import React, {useState} from "react";


export const ClaseUno = () => {
// ESTADOS GLOBALES DE VALIDACION
  const [input, setInput] = useState("");
  const [exito, setExito] = useState(false);
  const [incorrecto, setIncorrecto] = useState(false);
  const [estaCargando, setEstaCargando] = useState(false);

  // ======================================================= //

  const handleChange = (evento) => {
    setInput(evento.target.value);
  };
  const handleClick = () => {
    setEstaCargando(true);
    setIncorrecto(false);
    setExito(false);
    setTimeout(() => {
      validate(input);
      setEstaCargando(false);
    }, 5000);
  };

  const validate = (value) => {
    if (value === "gato") {
      setExito(true);
    } else {
      setIncorrecto(true);
    }
  };
  // ======================================================= /
  // ALARMA
  // let alarma = (mensaje, tiempo) => {
  //   setTimeout(function () {
  //     alert(mensaje);
  //   }, tiempo);
  // };
//   alarma("despierta!", 4000);
//   alarma("apagar el horno", 1000);
//   alarma("netflix and chill", 2000);
// MICROONDAS
  // let microondas = (mensaje, tiempo) => {
  //   setTimeout(function () {
  //     console.log(
  //       `han pasado ${tiempo / 1000} segundos, tu ${mensaje} está lista`
  //     );
  //   }, tiempo);
  // };
//   microondas("pizza", 2000);
//   microondas("empanadas", 3000);
//   microondas("tostados", 6000);
  // ======================================================= //
  // ***********  RETURN   *********
  return (
    <>
      <h1>Clase 1</h1>
      
      <input
        onChange={handleChange}
        value={input}
        placeholder="ingrese palabra secreta"
      />
      <button onClick={handleClick}>Validar</button>
      {estaCargando ? <h1>Cargando...</h1> : null}
      {exito ? <h1>Entre a la cueva secreta</h1> : null}
      {incorrecto ? <h1>No es correcto</h1> : null}
    
    </>
  );
};
  // ======================================================= //


