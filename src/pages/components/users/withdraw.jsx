import React from "react";
import User_layout from "./user_layout";

const Withdraw = () => {
   return (
      <User_layout>
         <div className="withdraw invest">
            <div className="container">
               <div className="col-lg-6 mx-auto mt-5 col-sm-6 col-12">
                  <div className="i-con bg-white shadow p-4 my-5 rounded">
                     <div className="head pb-4 text-center">
                        <span className="fw-bold fs-3">Withdraw</span>
                     </div>
                     <div className="body">
                        <table className="w-100">
                           <tr>
                              <th>Min. Withdrawal</th>
                              <td>10$</td>
                           </tr>
                           <tr>
                              <th>Withdrawal Amount</th>
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="10 USDT"
                              />
                           </tr>
                           <tr>
                              <th>Recipient Address</th>
                              <td>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="0xf825776e971da4400D9C98B09ee87ECb741bA301"
                                 />
                              </td>
                           </tr>
                           <tr>
                              <th>Staking Amount</th>
                              <td>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="10 USDT"
                                 />
                              </td>
                           </tr>
                           <tr>
                              <th>TXN Hash</th>
                              <td>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="transaction hash"
                                 />
                              </td>
                           </tr>
                        </table>
                        <div className="btn-con pt-5">
                           <button className="btn btn-danger w-100 rounded-pill">
                              Invest
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </User_layout>
   );
};

export default Withdraw;
