import React from "react";

function Image(props) {
  console.log(props);
  return (
    <div className="container">
      <div className="float-left col-3 mt-5">
        <img
          onClick={() => props.incrementClick()}
          src={props.image}
          alt={props.name}
          height="144"
          width="144"
        />
      </div>
    </div>
  );
}

export default Image;
