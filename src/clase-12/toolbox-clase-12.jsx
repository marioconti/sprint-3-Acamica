import React from "react";
export const ClaseDoce = () => {
  // AQUI USAMOS EL METODOS GET POR DEFECTO DE FETCH

  // ============================================
  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  // ============================================

  // QUE sucede en el caso de querer hacer un POST?
  // ============================================

  // fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     title: "foo",
  //     body: "bar",
  //     userId: 1,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  // ============================================

  // podremos ver en la consola del navegador la respuesta enviada por el servidor una vez que se ha creado el recurso

  fetch("https://httpstat.us/500")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  return <></>;
};
