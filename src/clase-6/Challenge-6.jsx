import React, { useState, useEffect } from "react";
import "./challenge-6.css";

export const ChallengeSeis = () => {
  //==================================================
  // Prototipo de fetch. Los .then también podría encadenarse directamente al fetch, por una cuestion de orden visual se puede dividir en dos partes
  /*let peticion = fetch("https://jsonplaceholder.typicode.com/comments");
  console.log(peticion);

  peticion
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      console.log(data);
    });
    */
  //==================================================
  // MINICHALLENGE
  // let peticion = fetch("https://jsonplaceholder.typicode.com/todos");
  // console.log(peticion);

  // peticion
  //   .then((respuesta) => {
  //     return respuesta.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  //==================================================
  // CHALLENGE6
  // es necesario crear un estado que contendrá la lista de usuarios porq es posible que esta se vaya modificando
  const [users, setUsers] = useState([]);
  const [mostrar, setMostrar] = useState(false);
  // El useEffect en esta caso trae los datos una vez que el componente se inici/monte en el DOM
  // Se le pasa un array vació que hará esta función/efecto se ejecute solamente cuando el componente se ejecute por primera vez en el DOM
  useEffect(() => {
    // dentro del use efect creamo la petición con un fetch, esta consultará la base de datos externa y nos devolverá una promesa (como ya vimos en los ejemplos anteriores). Luego esa petición se transforma a .json y nos devuelve un array de objetos con la data
    if (mostrar) {
      let peticion = fetch("https://jsonplaceholder.typicode.com/users");
      peticion
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((data) => {
          // al hacer un set con la data estamos haciendo una actualización de la lista de usuarios (users) con la información que nos trae la petición
          setUsers(data);
        });
    } else {
      setUsers([]);
    }
  }, [mostrar]);

  // Una vez que tenemos la información faltaría mostrarla.
  // Para esto es necesario hacer un map, pero antes una validación
  // Por que? Si hacemos solamente:
  /* users.map((user) => {
            return <Persona nombre={user.name} />;
    })
    Tendremos un error ya que .map será undefined. Esto sucede ya que el useEffect es asincrono y tomará tiempo en devolver la información, mientras el código se leerá y seguirá igual.
    Por esto es necesario verificar si user (que en el useState estaba vació, no tenía el array vacío) tiene la información que necesitamos (la información seteada)

    Una forma de resolver esto es hacer que el valor inicial de users va ser un array vacio 
    De esta forma podemos hacer una validacion que diga: si users.lenght es mayor a cero, quiere decir que esa petición ya se completo, entonces que devuelva lo que queremos (en este caso: user.name)
    
    Si el array todavía está vacío quiere decir que todavía no se ha cargado la info ("por eso saldrá un loading...")
  */

  return (
    <div className="ChallengeSeis">
      <h1>Personas:</h1>
      <button className="btn-contador" onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "OCULTAR" : "MOSTRAR"}
      </button>
      <div className="personas">
        {users.length > 0 &&
          users.map((user) => {
            return <Persona nombre={user.name} />;
          })}
      </div>
    </div>
  );
};
function Persona(props) {
  return (
    <div className="persona">
      <div>{props.nombre}</div>
    </div>
  );
  // return <></>;
}

// Cree un estado para el botón, que comienza en false
// Como resolví el challenge 6: hice un condicional en el useEffect que mostrar esta en true (mostrar es el boton) realice la petición y haga el set del array de users. Si está en false que lo reinicie a vacio.
// Luego en el boton hice una función que cambie de estado entre mostrando y oculto. Si la lista es mayor a 0 que muestre lo que hay. Si es igual a 0 no pasará nada
// FIXME: queda pendiete para ver el tema de que aparezca loading si es que al apretar el botón se esta cargando la lista
