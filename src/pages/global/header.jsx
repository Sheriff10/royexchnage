import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
   const toggleMenu = () => {
      const menu = document.querySelector(".menu-btn-b .menu-btn-burger");
      const slide = document.querySelector(".nav-menu");
      if (menu) menu.classList.toggle("open");
      if (slide) slide.classList.toggle("open");
    };
   return (
      <>
      <div className="position-relative py-5"></div>
      <div className="header top-0 end-0 start-0 py-2 position-fixed ">
         <div className="container">
            <div className=" c">
               <div className="col-lg-3 col-sm-12 col-md-6">
                  <div className="logo">
                     <span className="h3 text-light"><b>Logo</b></span>
                  </div>w
               </div>
               <div className="col-lg-5 col-sm-12 col-md-6">
                  <div className="nav-menu">
                     <ul>
                        <li>
                           <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                           <NavLink to="/trade">Trade</NavLink>
                        </li>
                        <li>
                           <NavLink to="/t/history">Transaction History</NavLink>
                        </li>
                        <li>
                           <NavLink to="/#ht">How to trade</NavLink>
                        </li>
                        <div className="b m-btn-menu">
                           <Link
                              className="btn btn-outline-danger l-btn"
                              to={"/login"}
                           >
                              Login
                           </Link>
                           <Link
                              className="btn btn-danger s-btn"
                              to={"/signup"}
                           >
                              Signup
                           </Link>
                        </div>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-6 col-md-6">
                  <div className="btn-menu">
                     <Link
                        className="btn btn-outline-danger l-btn"
                        to={"/login"}
                     >
                        Login
                     </Link>
                     <Link className="btn btn-danger s-btn" to={"/signup"}>
                        Signup
                     </Link>
                  </div>
               </div>
               <div className="menu-btn-b" onClick={toggleMenu}>
                  <div className="menu-btn-burger"></div>
               </div>
            </div>
         </div>
      </div>
      </>
   );
};
