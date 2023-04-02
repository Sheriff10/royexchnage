import React from "react";
import { FaClipboard } from "react-icons/fa";
export const Payment = () => {
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
                        <small>#10,000</small>
                     </div>
                     <div className="p-data-text m-3">
                        <span>
                           <b>Buy Amount</b>
                        </span>{" "}
                        <br />
                        <small>#10,000</small>
                     </div>
                     <div className="p-data-text m-3">
                        <span>
                           <b>Buy Amount</b>
                        </span>{" "}
                        <br />
                        <small>#10,000</small>
                     </div>
                  </div>
               </div>
               <div className="col-8">
                  <div className="p-detail">
                     <div className="p-detail-head">
                        <p>
                           {" "}
                           Send <span className="amt">70,000</span> to the
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
                              "0xGYS2782VT8s7VG2bBSUJ0WBSH629BUH782BYD*29nnd82"
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
