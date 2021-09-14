import React, { useState, useEffect } from "react";
import "./clase6.css"

export const ClaseSeis = () => {
  return (
    <>
      <div className="Claseseis">
        <PostsByUser />
      </div>
    </>
  );
};

const PostsByUser = () => {
  const [posts, setPosts] = useState([]);
  const [buscar, setBuscar] = useState(null);
  const [boton, setBoton] = useState(false);

  const handleBuscar = (e) => {
    setBuscar(e.target.value);
  };

  const handleBoton = () => {
    setBoton(!boton);
  };

  const handleBotonLimpiar = () => {
    setBuscar("");
    setPosts([]);
  };

  useEffect(() => {
    if (buscar <= 10) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${buscar}`)
        .then((res) => res.json())
        .then((data) => setPosts(data));
    } else {
      alert("INGRESASTE UN NUMERO MAYOR A 10");
    }
  }, [boton]);

  return (
    <>
      <input
        value={buscar}
        onChange={handleBuscar}
        type="text"
        placeholder="ingresa un id"
      />
      <button onClick={handleBoton}>buscar post</button>
      <button onClick={handleBotonLimpiar}>reset</button>
      <div className="comentarios">
        {posts.map((post) => {
          return <p className="post">{post.title}</p>;
        })}
      </div>
    </>
  );
};

//
