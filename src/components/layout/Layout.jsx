import React from "react";
import { Outlet } from "react-router-dom";
import UserInfo from "../userInfo/UserInfo";
import NavBar from "../navBar/NavBar";

export const Layout = () => {
  return (
    <div>
      <UserInfo user='Juan'/>
      <Outlet />
      <NavBar/>
    </div>
  );
};