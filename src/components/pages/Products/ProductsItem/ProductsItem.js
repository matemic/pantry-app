import React from "react";
import defaultIcon from "../../../../assets/images/default.svg";
import { Link } from "react-router-dom";

const ListItem = ({ product, selectProduct }) => {
  const { id, name, amount, minAmount, icon } = product;
  const amountStateClass =
    +minAmount > +amount ? "text-red-500" : "text-green-500";

  return (
    <div className="flex shadow-lg bg-white m-3 xl:w-1/4 md:w-5/12 w-full">
      <li className="py-5 px-4 relative text-center">
        <div className="flex justify-between controls">
          <Link className="text-gray-600" to={`/edit/${id}`}>
            Edit
          </Link>
          <svg
            onClick={() => selectProduct(product)}
            className="fill-current text-gray-600 cursor-pointer transform hover:-rotate-90 duration-300 ease-linear"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>
        <img
          className="w-2/4 mx-auto"
          src={icon ? icon : defaultIcon}
          alt={`${name} icon`}
        />
        <p className="text-2xl ml-3 my-3 font-serif font-bold">{name}</p>
        <div className="product-range">
          <input
            value={amount}
            min={minAmount}
            max="50"
            disabled
            className="product-range-input"
            type="range"
          ></input>
          <span className={`${amountStateClass} font-bold font-serif`}>
            Amount: {amount}
          </span>
        </div>
      </li>
    </div>
  );
};

export default ListItem;
