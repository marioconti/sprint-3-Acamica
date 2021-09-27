import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Profile = () => {
  const params = useParams();

  return (
    <>
      <h2>{params.username}</h2>
      <Link className="link-home" to="/home">Got to home</Link>
    </>
  );
};
