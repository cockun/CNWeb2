import React from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeAdmin from "./components/Admin/HomeAdmin";
import { renderRoutes } from "react-router-config";
import { Helper } from "./ultis/Helper";

import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/NewProduct";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import Detail from "./components/Detail";
import Bill from "./components/ReviewBill";
import reviewBill from "./components/ReviewBill";
const Both = ({ route }) => {
  return (
    <>
      <Header route={route} />
      <Footer />
    </>
  );
};
const container = ({ route }) => {
  return <>{renderRoutes(route.routes)}</>;
};

const routes = [
  {
    component: container,
    routes: [
      {
        path: "/Admin",
        exact: false,
        component: HomeAdmin,
        routes: [
          {
            path: "/bills",
            exact: true,
            component: Home,
          },
          {
            path: "/products",
            exact: true,
            component: Home,
          },
        ],
      },
      {
        path: "/",
        exact: false,
        component: Both,
        routes: [
          {
            path: "/Home",
            exact: true,
            component: Home,
          },
          {
            path: "/reviwBill",
            exact: true,
            component: reviewBill,
          },
          {
            path: "/",
            exact: true,
            component: Home,
          },
          {
            path: "/Shop",
            exact: true,
            component: Shop,
          },
          {
            path: "/Contact",
            exact: true,
            component: Contact,
          },
          {
            path: "/Bill",
            exact: true,
            component: Bill,
          },
          {
            path: "/Cart",
            exact: true,
            component: Cart,
          },
          {
            path: "/Register",
            exact: true,
            component: Register,
          },
          {
            path: "/Checkout",
            exact: true,
            component: Checkout,
          },
          {
            path: "/Detail/:id",
            exact: false,
            component: Detail,
          },
          {
            path: "/Login",
            exact: true,
            component: Login,
          },
        ],
      },
    ],
  },
];
function App() {
  sessionStorage.setItem("myCart", JSON.stringify([]));
  sessionStorage.setItem("myAccount", JSON.stringify(""));
  return (
    <div className="App">
      <Router>{renderRoutes(routes)}</Router>
    </div>
  );
}

export default App;
