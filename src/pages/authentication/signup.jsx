import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Signup = () => {
   return (
      <div className="login">
         <div className="container">
            <div className="row c justify-content-center">
               <div className="col-lg-6 col-sm-12 col-md-10">
                  <div className="form ">
                     <div className="col-12 text-center">
                        <span className="icon">
                           <FaUser />
                        </span>
                        <h3 className="p-3">Signup</h3>
                     </div>
                     <div className="form-group mb-4">
                        <input
                           type="text"
                           name="email"
                           id="email"
                           placeholder="Email *"
                           className="form-control p-3 mb-3"
                        />
                     </div>
                     <div className="form-group mb-4">
                        <input
                           type="text"
                           name="email"
                           id="email"
                           placeholder="Username *"
                           className="form-control p-3 mb-3"
                        />
                     </div>
                     <div className="form-group mb-3">
                        <input
                           type="password"
                           name="password"
                           id="password"
                           placeholder="Password *"
                           className="form-control p-3 mb-3"
                        />
                     </div>
                     <div className="form-group mb-3">
                        <input
                           type="password"
                           name="password"
                           id="password"
                           placeholder="Confirm Password *"
                           className="form-control p-3 mb-3"
                        />
                     </div>
                     <div className="row mt-4 p-2">
                        <button className="btn btn-danger  float-right">
                           {" "}
                           Signup{" "}
                        </button>
                     </div>
                     <div className="form-text">
                        <span>
                           <a href="#">Forgot Password?</a>
                        </span>
                        <span>
                           <Link to="/login">
                              Already have an account? Login!
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
