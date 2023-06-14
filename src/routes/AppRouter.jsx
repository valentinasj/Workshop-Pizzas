import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Login } from "../pages/login/Login";
import Register from "../pages/registrer/Register";
import { Search } from "../pages/search/Search";
import { Details } from "../pages/details/Details";
import { Cart } from "../pages/cart/Cart";
import { Paymentpage } from "../pages/paymentpage/Paymentpage";
import { Home } from "../pages/home/Home";

export const UserContext = createContext({});

const AppRouter = () => {
  const [userValues, setUserValues] = useState({});
  const [pizzaValues, setPizzaValues] = useState([]);

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          userValues,
          setUserValues,
          pizzaValues,
          setPizzaValues,
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" Component={Register} />
          <Route element={<Layout />}>
            <Route path="home" Component={Home} />
            <Route path="search" Component={Search} />
          </Route>
          <Route path="details/:id" Component={Details} />
          <Route path="cart" Component={Cart} />
          <Route path="payment" Component={Paymentpage} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
