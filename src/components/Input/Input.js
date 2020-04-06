import React from "react";

const Input = ({ children, name, label, type, ...props }) => {
  return (
    <div className="flex flex-col my-5 items-center">
      <label className="mb-2 font-bold font-serif" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        className="w-full md:w-3/4 px-2 py-3 border rounded border-grey-400"
        name={name}
        value=""
        placeholder={label}
        {...props}
      />
    </div>
  );
};

export default Input;
