import React from "react";
import ProductsContext from "../../../../context";
import { useParams } from "react-router-dom";
import Form from "../../Form/Form";

const EditProduct = () => {
  const { id } = useParams();

  const getEditedProduct = (products) => {
    const index = products.findIndex((product) => product.id === id);
    return products[index];
  };
  return (
    <ProductsContext.Consumer>
      {({ products }) => {
        const editedProduct = getEditedProduct(products);
        return <Form title="Edit product" editedProduct={editedProduct} />;
      }}
    </ProductsContext.Consumer>
  );
};

export default EditProduct;
