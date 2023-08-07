import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaClipboard, FaArrowAltCircleDown } from "react-icons/fa";

export const Trade = () => {
   const [NGN, setNGN] = useState("");
   const [USDT, setUSDT] = useState("");
   const [address, setAddress] = useState("");
   const [err, setErr] = useState("");
   const [err2, setErr2] = useState("");
   const [token, setToken] = useState("");

   useEffect(() => {
      authorize();
   }, []);

   const authorize = () => {
      var checkToken = window.sessionStorage.getItem("token");
      if (checkToken) {
         setToken(checkToken);
         return true;
      } else {
         window.location.href = "/login";
      }
   };

   const rateConverter = () => {
      const rate = NGN / 700;
      return setUSDT(rate);
   };

   const handleSubmit = () => {
      const data = { NGN, USDT, address };
      const validate = validateNGN();

      if (validate) {
         axios
            .post(`${window.api}/create_transaction`, data, {
               headers: {
                  "x-auth-token": token,
                  "Content-Type": "application/json",
               },
            })
            .then((res) => {
               console.log(res);
               window.location.href = `/payment?id=${res.data._id}`;
            })
            .catch((err) => {
               console.log(err);
            });
      }
   };

   const validateNGN = () => {
      if (NGN < 5000) {
         let errMsg = (
            <div className="p-2 text-warning text-bold">
               {" "}
               Minimum buy is #5,000
            </div>
         );
         return setErr(errMsg);
      }
      if (address == "") {
         setErr("");
         let errMsg = (
            <div className="p-2 text-warning text-bold">
               {" "}
               Address cannot be empty
            </div>
         );
         return setErr2(errMsg);
      } else {
         setErr("");
         setErr2("");
         return true;
      }
   };
   return (
      <div className="swap mt mb-0">
         <div className="bg-con pt-4">
            <div className="s-blur">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-lg-4 col-sm-12 col-md-8">
                        <div className="s-head">
                           <span className="h4 fw-bold text-light">
                              {" "}
                              Trade Now
                           </span>
                        </div>
                        <div className="s-card pb-bg-sec text-light">
                           <label>YOU SEND</label>
                           <div class="input-group mb-3">
                              <div class="btn" type="button" id="button-addon1">
                                 <img src="bnb-logo.png" alt="usdt_img" />
                              </div>
                              <input
                                 type="number"
                                 class="form-control"
                                 placeholder="5000"
                                 aria-label="Example text with button addon"
                                 aria-describedby="button-addon1"
                                 onChange={(e) => setNGN(e.target.value)}
                                 value={NGN}
                                 onKeyUp={rateConverter}
                              />
                           </div>
                           {err}
                           <div className="s-arrow text-center">
                              <FaArrowAltCircleDown />
                           </div>
                           <label>YOU RECIEVE</label>
                           <div class="input-group mb-3">
                              <div class="btn" type="button" id="button-addon1">
                                 <img src="usdt.png" alt="usdt_img" />
                              </div>
                              <input
                                 type="text"
                                 class="form-control"
                                 placeholder="USDT"
                                 aria-label="Example text with button addon"
                                 aria-describedby="button-addon1"
                                 value={USDT}
                              />
                           </div>
                           <label>Recieving Address</label>
                           <div class="input-group mb-3">
                              <input
                                 type="text"
                                 class="form-control"
                                 placeholder="Input address recieving the USDT"
                                 aria-describedby="button-addon1"
                                 onChange={(e) => setAddress(e.target.value)}
                                 value={address}
                              />
                           </div>{" "}
                           {err2}
                           <br />
                           <div
                              className="btn btn-buy \"
                              onClick={handleSubmit}
                           >
                              Buy Now
                           </div>
                           <table width={"100%"} className="">
                              <tr>
                                 <th>Rate per $</th>
                                 <td>#700</td>
                              </tr>
                              <tr>
                                 <th>Floating Fee</th>
                                 <td>#0.00</td>
                              </tr>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
