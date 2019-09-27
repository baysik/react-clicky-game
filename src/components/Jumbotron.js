import React from "react";
function Jumbo(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3 text-center">React Memory Game</h1>
        <h2 className="score text-center">Score: {props.counter}</h2>
      </div>
    </div>
  );
}

export default Jumbo;
