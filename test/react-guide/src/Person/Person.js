import React from "react";

const person = (props) => {
  console.log(props);
  return (
    <div className="testClass">
      <p onClick={props.click}>
        im {props.name} who is {props.age} years old aand
      </p>
      {props.children && <p>{props.children}</p>}
    </div>
  );
};

export default person;
