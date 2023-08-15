import React from "react";
import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
   return (
      <footer className="p-0 m-0">
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-sm-12 col-md-6">
                  <div className="ft-content">
                     <div className="ft-head">
                        <span> Quick Links</span>
                     </div>
                     <div className="ft-body">
                        <ul>
                           <li>
                              <Link to={"/#"}>Home </Link>
                           </li>
                           <li>
                              <Link to={"/#"}>About </Link>
                           </li>
                           <li>
                              <Link to={"/#"}>Service </Link>
                           </li>
                           <li>
                              <Link to={"/#"}>FAQs </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 col-md-6">
                  <div className="ft-content">
                     <div className="ft-head">
                        <span>Contact</span>
                     </div>
                     <div className="ft-body">
                        <p>Office 123-456-7890</p>
                        <p>P.O.B 19907, DA, US</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 col-md-6">
                  <div className="ft-content socials">
                     <div className="ft-head">
                        <span>Socials</span>
                     </div>
                     <div className="ft-body">
                        <div className="social-con">
                           <a href="#" target={"blank"}>
                              <FaTwitter />
                           </a>
                           <a href="#" target={"blank"}>
                              <FaTelegram />
                           </a>
                           <a href="#" target={"blank"}>
                              <FaLinkedin />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="ft-cap">
               <div className="row">
                  <div className="col">
                     <div className="ft-img">
                        <span className="h3 text-light d-flex">
                           <b>
                              Tether
                              <span className="text-danger fw-bold">X</span>
                           </b>
                        </span>
                     </div>
                  </div>
                  <div className="col">
                     <p> © 2023 | All RIght Reserved</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};
