import { useState } from "react";

// todos los custom hooks llevan un use adelante
// RECORDAR que tienen la misma sintaxis que una función
export const useInputData = (estado) => {
  const [inputData, setInputData] = useState(estado);
  //   ¿Que funcionalidad queremos reemplazar/abstraer para resumir el código? manejar los cambios del input que está siendo usada 3 veces en la función de validación

  const manejarCambio = (e) => {
    setInputData(e.target.value);
  };

  // los custom hooks deben retornar la información necesaria que requieran nuestros componentes o etiquetas
  // en este caso requerimos el estado y la función
  return {
    // inputData: inputData,
    // manejarCamnio: manejarCambio,
    // Escribir lo anterior es lo mismo que escribir esto
    inputData,
    manejarCambio,
    //     ¿Sabías que en Javascript, si la propiedad de un objeto tiene el mismo nombre de la variable que
    // almacena el valor, estos se pueden llamar igual? De fondo, el lenguaje sabe qué hacer.
  };
};
