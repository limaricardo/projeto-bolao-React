import React from "react";

const Button = ({ type, form, value, children }) => {
  return (
    <div>
      <button className="button" type={type} form={form} value={value}>
        {children}
      </button>
    </div>
  );
};

export default Button;
