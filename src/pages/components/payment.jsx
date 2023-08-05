import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaClipboard } from "react-icons/fa";
export const Payment = () => {
   const params = new URLSearchParams(window.location.search);
   const id = params.get("id");

   const [transaction_data, setTransaction_data] = useState([
      {NGN: "loading", USDT: "loading", address: "loading"}
   ])

   useEffect(() => {
      authorize();
      getTransactionData()
   }, []);
   const authorize = () => {
      var checkToken = window.sessionStorage.getItem("token");
      if (checkToken) {
         return true;
      } else {
         window.location.href = "/login";
      }
   };

   const getTransactionData = async () => {
      await axios
         .get(`${window.api}/get_transaction/${id}`, {
            headers: {
               "x-auth-token": window.sessionStorage.getItem("token"),
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            setTransaction_data(res.data)
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
         });
   };
   return (
      <div className="payment">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="p-head">
                     <h5>Buy with one simple click</h5>
                  </div>
               </div>
               <div className="col-4">
                  <div className="p-data">
                     <div className="p-data-text m-3">
                        <span>
                           <b>Buy Amount</b>
                        </span>{" "}
                        <br />
                        <small>{transaction_data.NGN}</small>
                     </div>
                     <div className="p-data-text m-3">
                        <span>
                           <b>Recieving</b>
                        </span>{" "}
                        <br />
                        <small>{transaction_data.USDT}</small>
                     </div>
                     <div className="p-data-text m-3">
                        <span>
                           <b>Transaction Status</b>
                        </span>{" "}
                        <br />
                        <small>{transaction_data.status}</small>
                     </div>
                  </div>
               </div>
               <div className="col-8">
                  <div className="p-detail">
                     <div className="p-detail-head">
                        <p>
                           {" "}
                           Send <span className="amt">#{transaction_data.NGN}</span> to the
                           account below
                        </p>
                     </div>
                     <div className="p-detail-bank">
                        <div className="row">
                           <div className="col-lg-6 col-sm-12 col-md-12">
                              <label>Account Number</label>
                              <div class="input-group mb-3">
                                 <button
                                    class="btn btn-danger"
                                    type="button"
                                    id="button-addon1"
                                 >
                                    <FaClipboard />
                                 </button>
                                 <input
                                    type="text"
                                    class="form-control"
                                    placeholder=""
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1"
                                    readOnly
                                    value={"9173728293"}
                                 />
                              </div>
                           </div>
                           <div className="col-lg-6 col-sm-12 col-md-12">
                              <label>Bank</label>
                              <div class="input-group mb-3">
                                 <input
                                    type="text"
                                    class="form-control"
                                    placeholder=""
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1"
                                    readOnly
                                    value={"OPAY (Paycom)"}
                                 />
                                 <button
                                    class="btn btn-danger"
                                    type="button"
                                    id="button-addon1"
                                 >
                                    <FaClipboard />
                                 </button>
                              </div>
                           </div>
                           <div className="col-lg-6 col-sm-12 col-md-12">
                              <label>Account Name</label>
                              <div class="input-group mb-3">
                                 <button
                                    class="btn btn-danger"
                                    type="button"
                                    id="button-addon1"
                                 >
                                    <FaClipboard />
                                 </button>
                                 <input
                                    type="text"
                                    class="form-control"
                                    placeholder=""
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1"
                                    readOnly
                                    value={"Paybiz Account"}
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="p-proof">
                           <label>
                              <b>Upload Reciept</b>
                           </label>
                           <input type="file" className="form-control" />
                        </div>
                     </div>
                     <br />
                     <div className="p-detail-text">
                        <p className="mb-2">
                           <b>Address recieving the USDT</b>
                        </p>
                        <input
                           type="text"
                           className="form-control"
                           value={
                              `${transaction_data.length == 0 ? "loading..." : transaction_data.address}`
                           }
                           readOnly
                           disabled
                        />
                     </div>
                  </div>
               </div>
               <div className="col-12">
                  <div className="row">
                     <div className="p-btn">
                        <button className="btn btn-danger">
                           I've made payment successfully
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
