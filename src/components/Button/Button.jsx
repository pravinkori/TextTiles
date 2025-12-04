import React from "react";

function Button({ disabled, handleSubmit, children }) {
  return (
    <button className="pushable" disabled={disabled} onClick={handleSubmit}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">{children}</span>
    </button>
  );
}

export default Button;
