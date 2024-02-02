import React from "react";

function Button({ ...delegated }) {
  return <button {...delegated}></button>;
}

export default Button;
