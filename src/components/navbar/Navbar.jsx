import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./style.scss";

function Navbar() {
   const navOptions = [
      {
         name: "home",
         path: "/"
      },

      {
         name: "agents",
         path: "/catalogo/agents"
      },

      {
         name: "weapons",
         path: "/catalogo/weapons"
      },
      {
         name: "maps",
         path: "/catalogo/maps"
      }
   ]

   return (
      <nav className="navbar container">
         <div className="navbar__logo">
            <img src={logo} alt="" />
         </div>
         <ul className="navbar__items">
            {navOptions.map(item => (
               <>
                  <li className="navbar__item">
                     <Link to={item.path} >{item.name}</Link>
                  </li>
               </>
            ))}
         </ul>
      </nav>
   );
}

export default Navbar;
