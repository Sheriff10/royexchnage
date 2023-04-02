import React from "react";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
   return (
      <footer>
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-sm-12 col-md-6">
                  <div className="ft-content">
                     <div className="ft-head">
                        <span> Learn More</span>
                     </div>
                     <div className="ft-body">
                        <ul>
                           <li>
                              <Link to={"/#"}>Home </Link>
                           </li>
                           <li>
                              <Link to={"/#"}>Home </Link>
                           </li>
                           <li>
                              <Link to={"/#"}>Home </Link>
                           </li>
                           <li>
                              <Link to={"/#"}>Home </Link>
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
                        <p>P.O.B 1233, Area-5 m command, LA, NG</p>
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
                              <FaTwitter />
                           </a>
                           <a href="#" target={"blank"}>
                              <FaTwitter />
                           </a>
                           <a href="#" target={"blank"}>
                              <FaTwitter />
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
                        <img src="logo.png" alt="firstPay" className="img-fluid"/>
                        <span className="text-black p-2 h5"><b>FirstPay</b></span>
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
