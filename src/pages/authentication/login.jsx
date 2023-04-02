import React from "react";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Login = () => {
   return (
      <div className="login">
         <div className="container">
            <div className="row c justify-content-center">
               <div className="col-lg-6 col-sm-12 col-md-10">
                  <div className="form ">
                     <div className="col-12 text-center">
                        <span className="icon">
                           <FaLock />
                        </span>
                        <h3 className="p-3">Login</h3>
                     </div>
                     <div className="form-group mb-4">
                        {/* <label htmlFor="email" className="form-label">
                  Email:
                </label> */}
                        <input
                           type="text"
                           name="email"
                           id="email"
                           placeholder="Email *"
                           className="form-control p-3 mb-3"
                        />
                     </div>
                     <div className="form-group mb-3">
                        {/* <label htmlFor="password" className="form-label">
                  Password:
                </label> */}
                        <input
                           type="password"
                           name="password"
                           id="password"
                           placeholder="Password *"
                           className="form-control p-3 mb-3"
                        />
                     </div>
                     <div className="row mt-4 p-2">
                        <button className="btn btn-danger  float-right">
                           {" "}
                           Login{" "}
                        </button>
                     </div>
                     <div className="form-text">
                        <span>
                           <a href="#">Forgot Password?</a>
                        </span>
                        <span>
                           <Link to="/signup">
                              Don't have an account? Signup
                           </Link>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
