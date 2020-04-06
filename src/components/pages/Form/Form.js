import React, { Component } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import ProductsContext from "../../../context";
import { v4 as uuid } from "uuid";
import { Redirect } from "react-router";

export default class AddProducts extends Component {
  state = {
    id: uuid(),
    name: "",
    amount: "",
    minAmount: "",
    icon: "",
  };

  componentDidMount = () => {
    if (this.props.editedProduct) {
      this.setState({
        id: this.props.editedProduct.id,
        name: this.props.editedProduct.name,
        amount: this.props.editedProduct.amount,
        minAmount: this.props.editedProduct.minAmount,
        icon: this.props.editedProduct.icon,
      });
    }
    return;
  };

  resetForm() {
    this.setState({
      name: "",
      amount: "",
      minAmount: "",
      icon: "",
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <ProductsContext.Consumer>
        {({ addProduct, editProduct, isSubmitted }) => (
          <div className="mt-10 flex justify-center">
            <div className="flex rounded-lg shadow-lg lg:w-1/4 md:w-3/4 w-4/5 bg-white h-200 p-5">
              <div className="flex flex-col items-center w-full mt-4">
                <h2 className="text-4xl">{this.props.title}</h2>
                <form
                  onSubmit={(e) => {
                    this.props.editedProduct
                      ? editProduct(e, this.state)
                      : addProduct(e, this.state);
                    this.resetForm();
                  }}
                  className="w-full mt-3"
                >
                  <Input
                    onChange={this.handleChange}
                    value={this.state.name}
                    name="name"
                    label="Product name"
                  />
                  <Input
                    onChange={this.handleChange}
                    value={this.state.amount}
                    name="amount"
                    type="number"
                    max="50"
                    label="Amount"
                  />
                  <Input
                    onChange={this.handleChange}
                    value={this.state.minAmount}
                    name="minAmount"
                    type="number"
                    min="1"
                    label="Minimum amount"
                  />
                  <Input
                    onChange={this.handleChange}
                    value={this.state.icon}
                    name="icon"
                    type="text"
                    label="Food Icon URL"
                  />
                  <Button
                    className="block text-center bg-green-500 w-full hover:opacity-100 opacity-50 transition-opacity duration-300 ease-in-out py-3 text-white font-bold mt-3"
                    type="submit"
                  >
                    {this.props.title}
                  </Button>
                  {isSubmitted && <Redirect to="/" />}
                </form>
              </div>
            </div>
          </div>
        )}
      </ProductsContext.Consumer>
    );
  }
}
