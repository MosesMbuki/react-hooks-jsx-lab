import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const divstyle = {
    color: "firebrick",   
  };
  return (
    <div id="home">Home
    <h1 style={divstyle}>
      {name} is a Web Developer from {city}
    </h1>
  </div>);
}

export default Home;
