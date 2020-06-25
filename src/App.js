import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeAdmin from "./components/Admin/HomeAdmin";
import { Provider } from "react-redux";
import products from "./reducers/products";
import { categories } from "./reducers/categories";
import { cart } from "./reducers/cart";
import { createStore, combineReducers } from "redux";
const store = createStore(combineReducers({ products, categories, cart }));
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <HomeAdmin />
        </div>
      </div>
    </Provider>
  );
}

export default App;
