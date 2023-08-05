import React from "react";
import { FaBtc } from "react-icons/fa";

export default function Staking() {
   const dum = [1, 2, 3];
   return (
      <div className="staking">
         <div className="s-head bg-secondary fw-bold  text-center p-3 text-light">
            <h2 className="fw-bold text-uppercase">Staking</h2>
            <span>Invest and Earn</span>
         </div>
         <div className="container">
            <div className="row">
               {dum.map((i, index) => (
                  <div className="col-lg-4 col-sm-6 col-12 p-lg-4 mb-4" key={index}>
                     <div className="s-card my-5 shadow p-4 rounded">
                        <div className="s-card-head">
                           <div className="d-flex justify-content-between pb-3 fw-bold fs-3">
                              <span> STAKE USDT</span>
                              <img
                                 src="usdt.png"
                                 alt="usdt"
                                 className="img-fluid"
                                 width={50}
                              />
                           </div>
                           <div className="s-body">
                              <div className="apr">
                                 <small className="text-muted ">APR</small>{" "}
                                 <br />
                                 <span className="fw-bold fs-5 text-success">
                                    45.7{" "}
                                    <small className="text-muted ">%</small>
                                 </span>
                              </div>{" "}
                              <br />
                              <div className="time d-flex">
                                 <div className="col">
                                    <small className="text-muted ">
                                       Duration
                                    </small>{" "}
                                    <br />
                                    <span className="fw-bold fs-5 text-success">
                                       7 Days
                                    </span>
                                 </div>
                                 <div className="col">
                                    <small className="text-muted ">Name</small>{" "}
                                    <br />
                                    <span className="fw-bold">
                                       Primary Staking
                                    </span>
                                 </div>
                              </div>
                              <button className="btn w-100 fw-bold btn-danger mt-3">
                                 Stake Now
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
