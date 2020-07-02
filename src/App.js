import React from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeAdmin from "./components/Admin/HomeAdmin";
import { renderRoutes } from "react-router-config";
import { Helper } from "./ultis/Helper";

import Search from './components/Search';
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/NewProduct";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import Detail from "./components/Detail";
<<<<<<< HEAD
import Bill from "./components/ReviewBill";
import AccUser from "./components/AccUser";
=======
import Bill from "./components/Admin/Bill";
import reviewBill from "./components/ReviewBill";
import Products from "./components/Admin/Products";
import Account from "./components/Admin/Account";
>>>>>>> 77659a319900c0a3cc292d38c76b8c68d3c8e9a8
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
            path: "/Admin/bills",
            exact: true,
            component: Bill,
          },
          {
            path: "/Admin/products",
            exact: true,
            component: Products,
          },
          {
            path: "/Admin/",
            exact: true,
            component: Account,
          },
          {
            path: "/Admin/Account",
            exact: true,
            component: Account,
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
            path: "/AccUser",
            exact: true,
            component: AccUser,
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
          {
            path:"/Search/:text",
            exact: false,
            component: Search,
          }
        ],
      },
    ],
  },
];
function App() {
  sessionStorage.setItem("myCart", JSON.stringify([]));
  sessionStorage.setItem("myAccount", JSON.stringify(""));
  sessionStorage.setItem("myAccountID", JSON.stringify(""));
  return (
    <div className="App">
      <Router>{renderRoutes(routes)}</Router>
    </div>
  );
}

export default App;
