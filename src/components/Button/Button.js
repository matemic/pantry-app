import React from "react";

const Button = ({ to, children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
