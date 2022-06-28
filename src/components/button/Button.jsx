import React from "react";
import "./button.scss"

function Button(props) {
  return (
    <button className="button" onClick={props.onClick ? () => props.onClick() : null}>
      {props.children}
    </button>
  );
}

export default Button;
