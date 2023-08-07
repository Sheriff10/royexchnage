import axios from "axios";
import React, { useState } from "react";
import { FaBitcoin, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Signup = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [username, setUsername] = useState("");
   const [conPass, setConPass] = useState("");
   const [err, setErr] = useState("");

   const handleSubmit = () => {
      const data = { email, password, username };
      if (password !== conPass)
         setErr(
            <div className="alert alert-danger">"Password does not match"</div>
         );
      else {
         setErr("");
         axios
            .post(`${window.api}/auth/signup`, data)
            .then((res) => {
               if (res) {
                  console.log(res.data);
                  handleResponse(res.data);
               }
            })
            .catch((err) => console.log(err));
      }
   };
   const handleResponse = (data) => {
      if (data !== "new user") {
         const errMsg = <div className="alert alert-danger">{data}</div>;
         return setErr(errMsg);
      } else {
         window.location.href = "/trade";
      }
   };
   return (
      <div className="login">
         <div className="container">
            <div className="row c justify-content-center">
               <div className="col-lg-4 col-sm-12 col-md-10">
                  <div className="form ">
                     <div className="col-12 text-center">
                        <span className="icon text-light fs-3 pt-1 pb-2 px-3">
                           <FaBitcoin />
                        </span>
                        <h3 className="p-3 fw-bold text-light">REGISTER TO ROYXCHANGE</h3>
                     </div>
                     <div className="err-con">{err}</div>
                     <div className="form-group mb-4">
                        <input
                           type="text"
                           name="username"
                           id="email"
                           placeholder="Username *"
                           className="form-control p-3 mb-3"
                           onChange={(e) => setUsername(e.target.value)}
                           value={username}
                        />
                     </div>
                     <div className="form-group mb-4">
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
                     <div className="form-group mb-3">
                        <input
                           type="password"
                           name="password"
                           id="password"
                           placeholder="Confirm Password *"
                           className="form-control p-3 mb-3"
                           onChange={(e) => setConPass(e.target.value)}
                           value={conPass}
                        />
                     </div>
                     <div className="row mt-4 p-2">
                        <button
                           className="btn btn-danger pb-bg-pri-grad text-light float-right"
                           onClick={handleSubmit}
                        >
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
