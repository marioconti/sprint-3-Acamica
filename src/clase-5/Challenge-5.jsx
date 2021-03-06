import React, { useState, useEffect } from "react";
import "./challenge-5.css";
// =============================================
/*
Lo primero que debemos de hacer es entender cómo funciona este hook. Para esto, vamos a considerar tres escenarios:

1 Invocar el efecto solo una vez.
2 Añadir un efecto en un componente.
3 Controlar cuando se invoca un efecto.


* el segundo parámetro que recibe el hook es un array de dependencias (el primero es una fx, puede ser una fx anonima) de valores que indican cuándo el efecto debe ser invocado. El efecto solo será ejecutado (como siempre, después del renderizado) si algunas de estas variables especificadas en el array cambian de valor. En el array de dependencias puede existir más de un valor, pero considera que los valores dependientes deben existir dentro del efecto.
Esto último es importante, si cambia algo en el efecto, es decir en la fx, ahi se modifica el array
*/
// =============================================

export const ChallengeClaseCinco = () => {
  const [mostrar, actualizarMostrar] = useState(true);
  const [contador, setContador] = useState(0);
  const [oldCounter, setOldCounter] = useState(contador);

  useEffect(() => {
    if (mostrar === false) {
      console.error("El componente Counter no se encuentra montando");
      console.info("Presiona mostrar para ver nuevamente el componente");
    }
  }, [mostrar]);

  return (
    <>
      <div className="contenedor-principal">
        <h1>Challenge clase 5 - Mario Conti</h1>
        <button
          className="btn-contador"
          onClick={() => actualizarMostrar(!mostrar)}
        >
          {mostrar ? "OCULTAR" : "MOSTRAR"}
        </button>
        {mostrar === true ? (
          <Counter
            contador={contador}
            setContador={setContador}
            oldCounter={oldCounter}
          />
        ) : (
          <p>PRESIONA EL BOTON PARA VER EL CONTADOR</p>
        )}
      </div>
    </>
  );
};

export const Counter = (props) => {
  const incrementar = () => {
    props.setContador(props.contador + 1);
  };
  const disminuir = () => {
    props.setContador(props.contador - 1);
  };
  const reset = () => {
    props.setContador(0);
  };

  useEffect(() => {
    if (props.contador > props.oldCounter) {
      console.log("El valor ha aumentado");
      console.log(
        `Valor del contador actualizado ${props.contador} y el viejo ${props.oldCounter}`
      );
    } else if (props.contador < props.oldCounter) {
      console.log("El valor ha disminuido");
      console.log(
        `Valor del contador actualizado ${props.contador} y el viejo ${props.oldCounter}`
      );
    } else if (props.contador === 0) {
      console.log("El valor actual es cero");
    }
  }, [props.oldCounter, props.contador]);

  return (
    <main className="Application">
      <section className="Counters">
        <div className="Counter">
          <p className="count">{props.contador}</p>
          <section className="controls">
            <button className="botones-contador" onClick={incrementar}>
              +
            </button>
            <button className="botones-contador" onClick={disminuir}>
              -
            </button>
            <button className="botones-contador" onClick={reset}>
              Reset
            </button>
          </section>
        </div>
      </section>
    </main>
  );
};
