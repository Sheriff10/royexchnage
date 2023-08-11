import axios from "axios";
import React, { useEffect, useState } from "react";
import User_layout from "./user_layout";

export const THistory = () => {
   const [t_history, setT_history] = useState([]);
   const [tHistory_lg, setT_history_dom] = useState("");
   const [token, setToken] = useState("");
   useEffect(() => {
      // authorize();
      getTransaction();
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

   const getTransaction = async () => {
      const authToken = window.sessionStorage.getItem("token");
      await axios
         .get(`${window.api}/get_user_transactions`, {
            headers: {
               "x-auth-token": authToken,
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            handleResponse(res.data);
            console.log(res);
         })
         .catch((err) => console.log(err));
   };
   const handleResponse = (res) => {
      if (res == "no transaction") console.log(res); //do something
      else {
         console.log(res);
         setT_history(res);

         // const t_history_html = setT_history_dom(t_history_html);
         // console.log(tHistory_lg);
      }
   };
   return (
      <User_layout>
         <div className="t-history">
            <div className="container">
               <div className="card-con">
                  <div className="card-con-head">
                     <span>Transaction History</span>
                  </div>
                  <div className="card-con-body">
                     <div className="card">
                        <div className="card-head">
                           <div className="row card-head-menu">
                              <div className="col-3">
                                 {" "}
                                 <span>Trade Type</span>
                              </div>
                              <div className="col-2">
                                 <span>Payment Type</span>
                              </div>
                              <div className="col-2">
                                 <span>Status</span>
                              </div>
                              <div className="col-5">
                                 <span>Order Details</span>
                              </div>
                           </div>
                        </div>
                        {t_history.length == 0 ? (
                           <h3 className="p-4 text-center">No Transactions</h3>
                        ) : (
                           t_history.map((i, index) => (
                              <div className="card-body" key={index}>
                                 <div className="row">
                                    <div className="col-3">
                                       <button className="btn btn-success">
                                          Buy
                                       </button>
                                       <br /> <br />
                                       <div>
                                          <small>Transaction ID:</small>
                                          <br />
                                          <small>00122</small>
                                       </div>
                                    </div>
                                    <div className="col-2">
                                       <span>Bank Transfer</span>
                                    </div>
                                    <div className="col-2">
                                       <span>{i.status}</span>
                                    </div>
                                    <div className="col-5">
                                       <div className="row">
                                          <div className="order-head col-lg-3 col">
                                             <span>
                                                <b>Order Amount</b>
                                             </span>{" "}
                                             <br />
                                             <span>
                                                <b>Rate/$</b>
                                             </span>
                                             <br />
                                             <span>
                                                <b>Time</b>
                                             </span>
                                             <br />
                                          </div>
                                          <div className="order-body col">
                                             <span>{i.NGN}</span> <br />
                                             <span>{i.USDT}</span>
                                             <br />
                                             <span>#700 per $</span> <br />
                                             <span>10-12-2020</span>
                                             <br />
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))
                        )}
                        {/* <div className="card-body">
                        <div className="row">
                           <div className="col-3">
                              <button className="btn btn-success">Buy</button>
                              <br /> <br />
                              <div>
                                 <small>Transaction ID:</small>
                                 <br />
                                 <small>00122</small>
                              </div>
                           </div>
                           <div className="col-2">
                              <span>Bank Transfer</span>
                           </div>
                           <div className="col-2">
                              <span>Confirmed</span>
                           </div>
                           <div className="col-5">
                              <div className="row">
                                 <div className="order-head col-lg-3 col">
                                    <span>
                                       <b>Order Amount</b>
                                    </span>{" "}
                                    <br />
                                    <span>
                                       <b>Rate/$</b>
                                    </span>
                                    <br />
                                    <span>
                                       <b>Time</b>
                                    </span>
                                    <br />
                                 </div>
                                 <div className="order-body col">
                                    <span>#10,000</span> <br />
                                    <span>#760</span>
                                    <br />
                                    <span>10-12-2020</span>
                                    <br />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div> */}
                     </div>

                     {/* Mobile */}
                     <div className="card c-mobile">
                        <div className="card-head">
                           <div className="row card-head-menu">
                              <span>Transaction Details</span>
                           </div>
                        </div>
                        {t_history.length == 0 ? (
                           <h3 className="p-4 text-center">No Transactions</h3>
                        ) : (
                           t_history.map((i, index) => (
                              <div className="card-body" key={index}>
                                 <div className="row">
                                    <div className="col">
                                       <ul className="head">
                                          <li>Trade Type</li>
                                          <li>Payment Type</li>
                                          <li>Staus</li>
                                          <li>Order Amt.</li>
                                          <li>USDT Amt</li>
                                          <li>Order Created</li>
                                          <li>Transc. ID</li>
                                       </ul>
                                    </div>
                                    <div className="col ">
                                       <ul>
                                          <li className="text-light text-center bg-success">
                                             <b>BUY</b>
                                          </li>
                                          <li>Bank Transfer </li>
                                          <li>{i.status} </li>
                                          <li>{i.NGN} </li>
                                          <li>{i.USDT} </li>
                                          <li>10/4/2023</li>
                                          <li>10-4As-2023</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           ))
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </User_layout>
   );
};
