import Navbar from "./components/navbar/Navbar";
import Menu from './components/menu/Menu'
import Footer from "./components/footer/Footer"
import { Outlet } from "react-router-dom";
import React from "react";
const Layout = () => {
    return (
      <div className="main">
        <Navbar/>
        <div className="Container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
export default Layout
