import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <>
      <div className="contenedor-home">
        <div className="home">
          <h1>Home</h1>
        </div>
        <div className="usuarios">
          <h2>Usuarios</h2>
        </div>
        <ul className="contenedor-principal">
          {users.map((user) => {
            // error en al toolbox aquí no ponen nunca el return
            return (
              <Link className="links" to={`users/${user.login}`}>
                {user.login}
              </Link>
            );
          })}
        </ul>
        <Link className="link-home" to="/home">Go to Home</Link>
      </div>
    </>
  );
};
