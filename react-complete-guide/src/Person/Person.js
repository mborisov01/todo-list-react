import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click} className="props">
        Im a {props.name} and im {props.age} years old
      </p>
      {props.children && <p className="child">{props.children}</p>}
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
        maxLength="20"
      />
    </div>
  );
};

export default person;
