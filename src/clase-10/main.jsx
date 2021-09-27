import React from "react";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <h2>Main</h2>
      <Link link-home to="/home">Go to Home</Link>
    </>
  );
};
