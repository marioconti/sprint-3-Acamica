import React from "react";

export const ChallengeClaseDos = () => {

fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error));

  return (
    <>
      <h1>Challenge clase 2</h1>
    </>
  );
};