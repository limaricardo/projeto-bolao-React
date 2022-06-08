import React, { useState } from "react";

const Input = ({ htmlFor, type, id, name, children }) => {
  const [term, setTerm] = useState("");

  return (
    <div>
      <div className="container-input">
        <label htmlFor={htmlFor}>{children}</label>
        <input
          onChange={(e) => setTerm(e.target.value)}
          type={type}
          id={id}
          name={name}
          value={term}
        />
      </div>
    </div>
  );
};

export default Input;
