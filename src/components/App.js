import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./pages/Form/Form";
import Settings from "./pages/Settings/Settings";
import ProductsContext from "../context";
import Header from "./Header/Header";
import Modal from "./Modal/Modal";
import List from "./pages/Products/List";
import EditProduct from "./pages/Products/EditProduct/EditProduct";

import apple from "../assets/images/apple.svg";
import sugar from "../assets/images/sugar.svg";
import cheese from "../assets/images/cheese.svg";
import drink from "../assets/images/drink.svg";
import egg from "../assets/images/egg.svg";
import candy from "../assets/images/candy.svg";
import { InvalidRoute } from "./pages/InvalidRoute/InvalidRoute";

class App extends Component {
  state = {
    products: [
      { id: "0", name: "Apple", minAmount: "5", amount: "10", icon: apple },
      { id: "1", name: "Sugar", minAmount: "5", amount: "2", icon: sugar },
      { id: "2", name: "Cheese", minAmount: "5", amount: "5", icon: cheese },
      {
        id: "3",
        name: "Beverages",
        minAmount: "5",
        amount: "12",
        icon: drink,
      },
      { id: "4", name: "Eggs", minAmount: "5", amount: "12", icon: egg },
      { id: "5", name: "Sweets", minAmount: "20", amount: "5", icon: candy },
    ],
    selectedProduct: "",
    isModalOpen: false,
    isSubmitted: false,
  };

  componentDidMount() {
    localStorage.getItem("products") &&
      this.setState({
        products: JSON.parse(localStorage.getItem("products")),
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.products !== this.state.products) {
      localStorage.setItem("products", JSON.stringify(this.state.products));
      this.setState({
        isSubmitted: false,
      });
    } else {
      return;
    }
  }

  selectProduct = (product) => {
    this.setState({
      isModalOpen: true,
      selectedProduct: product,
    });
  };

  editProduct = (e, editedProduct) => {
    e.preventDefault();
    this.setState((prevState) => {
      const updatedProducts = {
        products: prevState.products.map((product) => {
          return product.id === editedProduct.id ? editedProduct : product;
        }),
        isSubmitted: true,
      };
      return updatedProducts;
    });
  };

  removeProduct = () => {
    const { id } = this.state.selectedProduct;
    const updatedProducts = this.state.products.filter(
      (product) => product.id !== id
    );
    this.setState({
      products: updatedProducts,
      selectedProduct: "",
      isModalOpen: false,
    });
  };

  addProduct = (e, product) => {
    e.preventDefault();
    this.setState({
      products: [...this.state.products, product],
      isSubmitted: true,
    });
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextState = {
      ...this.state,
      addProduct: this.addProduct,
      selectProduct: this.selectProduct,
      openModal: this.openModal,
      editProduct: this.editProduct,
    };
    return (
      <div className="h-screen">
        <Router>
          <ProductsContext.Provider value={contextState}>
            <Header />
            <Switch>
              <Route exact path="/">
                <List />
              </Route>
              <Route path="/add">
                <Form title="Add product" />
              </Route>
              <Route path="/edit/:id">
                <EditProduct />
              </Route>
              <Route path="/orders">
                <List />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route to="*">
                <InvalidRoute />
              </Route>
            </Switch>
            {isModalOpen && (
              <Modal
                selectedProduct={this.state.selectedProduct}
                closeModal={this.closeModal}
              >
                <button
                  onClick={this.closeModal}
                  className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={this.removeProduct}
                  className="focus:outline-none px-4 bg-green-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                >
                  Confirm
                </button>
              </Modal>
            )}
          </ProductsContext.Provider>
        </Router>
      </div>
    );
  }
}

export default App;
