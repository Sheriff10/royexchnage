import axios from "axios";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [err, setErr] = useState("");

   const handleSubmit = () => {
      const data = { email, password };
      axios
         .post(`${window.api}/auth/login`, data)
         .then((res) => {
            handleResponse(res);
         })
         .catch((err) => {
            console.log(err);
            var errRes = {data: "Email and password does not exist"}
            handleResponse(errRes);
         });
   };
   const handleResponse = (res) => {
      const data = res.data
      if (data !== "authenticated") {
         const errMsg = <div className="alert alert-danger">{data}</div>;
         return setErr(errMsg);
      } else {
         const token = res.headers["x-auth-token"];
         setErr("");
         window.location.href = '/trade'
         window.sessionStorage.setItem("token", token);
      }
   };
   return (
      <div className="login">
         <div className="container">
            <div className="row c justify-content-center">
               <div className="col-lg-4 col-sm-12 col-md-10">
                  <div className="form ">
                     <div className="col-12 text-center">
                        <span className="icon text-light fs-3 pb-4 px-3">
                           <FaLock />
                        </span>
                        <h3 className="p-3 fw-bold text-light mt-2">LOGIN TO ROYXCHNAGE</h3>
                     </div>
                     <div className="err-con">{err}</div>
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
                           onChange={(e) => setEmail(e.target.value)}
                           value={email}
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
                           onChange={(e) => setPassword(e.target.value)}
                           value={password}
                        />
                     </div>
                     <div className="row mt-4 p-2">
                        <button
                           className="btn pb-bg-pri-grad text-light fw-bold  float-right"
                           onClick={handleSubmit}
                        >
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
