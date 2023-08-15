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
         {/* <div className="position-relative py-5"></div> */}
         <div className="header top-0 end-0 start-0 py-2 ">
            <div className="container">
               <div className=" c">
                  <div className="col-lg-3 col-sm-12 col-md-6">
                     <div className="logo">
                        <span className="h3 text-light d-flex">
                           <b>Tether<span className="text-danger fw-bold">X</span></b>
                        </span>
                     </div>
                  </div>
                  <div className="col-lg-5 nav-menu col-sm-12 col-md-6">
                     <div className="">
                        <ul>
                           <li>
                              <a href="/">Home</a>
                           </li>
                           <li>
                              <a href="#about">About</a>
                           </li>
                           <li>
                              <a href="#service">Services</a>
                           </li>
                           <li>
                              <a href="#faqs">FAQs</a>
                           </li>
                           <div className="b m-btn-menu">
                              {window.token ? (
                                 <Link
                                    className="btn btn-danger s-btn"
                                    to={"/user/dashboard"}
                                 >
                                    Dashboard
                                 </Link>
                              ) : (
                                 <>
                                    <Link
                                       className="btn btn-outline-danger l-btn"
                                       to={"/auth/login"}
                                    >
                                       Login
                                    </Link>
                                    <Link
                                       className="btn btn-danger s-btn"
                                       to={"/auth/signup"}
                                    >
                                       Signup
                                    </Link>
                                 </>
                              )}
                           </div>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-4 btn-menu col-sm-6 col-md-6">
                     <div className="">
                        {window.token ? (
                           <Link
                              className="btn btn-danger s-btn"
                              to={"/user/dashboard"}
                           >
                              Dashboard
                           </Link>
                        ) : (
                           <>
                              <Link
                                 className="btn btn-outline-danger l-btn"
                                 to={"/auth/login"}
                              >
                                 Login
                              </Link>
                              <Link
                                 className="btn btn-danger s-btn"
                                 to={"/auth/signup"}
                              >
                                 Signup
                              </Link>
                           </>
                        )}
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
