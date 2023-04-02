import React from "react";

export const THistory = () => {
   return (
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
                     <div className="card-body">
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
                     </div>
                     <div className="card-body"></div>
                  </div>








                  {/* Mobile */}
                  <div className="card c-mobile">
                     <div className="card-head">
                        <div className="row card-head-menu">
                           <span>Transaction Details</span>
                        </div>
                     </div>
                     <div className="card-body">
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
                                <li className="text-light text-center bg-success"><b>BUY</b></li>
                                <li>Bank Transfer </li>
                                <li>Pending </li>
                                <li>#100,0000 </li>
                                <li>$150 </li>
                                <li>10/4/2023</li>
                                <li>10-4As-2023</li>
                            </ul>
                          </div>
                        </div>
                     </div>
                     <div className="card-body"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
