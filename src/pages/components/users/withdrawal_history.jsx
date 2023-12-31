import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import User_layout from "./user_layout";

export default function WithdrawalHistory() {
   const dum = [1, 2, 3, 5];
   return (
      <User_layout>
         <div className="investments">
            <div className="container">
               <div className="head py-3 px-1">
                  <span className="fs-3 fw-bold">Withdrawal History</span>{" "}
                  <br />
                  <small>Here's your list of withdrawals</small>
               </div>
               <div className="body overflow-auto">
                  <table className="w-100 rounded overflow-auto bg-white">
                     <thead className="bg-black py-4 text-light">
                        <tr>
                           <th>Amount</th>
                           <th>Date</th>
                           <th>Status</th>
                        </tr>
                     </thead>
                     <tbody>
                        {/* {dum.map((i, index) => (
                           <tr key={index}>
                              <td>23.8 USDT</td>
                              <td>10-20-2034</td>
                              <td>
                                 <small className="text-warning">
                                    processing
                                 </small>
                              </td>
                           </tr>
                        ))} */}
                     </tbody>
                  </table>
                  <div className="fw-bold text-center py-5 bg-gray border-bottom border-danger shadow rounded">
                     <span>
                        <FaExclamationCircle /> No Withdrawals
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </User_layout>
   );
}
