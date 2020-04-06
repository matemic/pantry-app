import React from "react";
import { useLocation } from "react-router-dom";
import ProductsContext from "../../../context";
import ProductsItem from "./ProductsItem/ProductsItem";

const List = () => {
  const { pathname } = useLocation();
  return (
    <ProductsContext.Consumer>
      {({ products, selectProduct }) => {
        const productsToBuy =
          pathname === "/orders"
            ? products.filter((product) => +product.minAmount > +product.amount)
            : products;
        return (
          <div className="mt-10 flex justify-center">
            <ul className="flex w-2/4 flex-wrap">
              {products.length ? (
                productsToBuy.map((product) => (
                  <ProductsItem
                    selectProduct={selectProduct}
                    product={product}
                    key={product.id}
                  />
                ))
              ) : (
                <div className="w-full flex justify-center text-3xl">
                  Please add some products to the list!
                </div>
              )}
            </ul>
          </div>
        );
      }}
    </ProductsContext.Consumer>
  );
};

export default List;
