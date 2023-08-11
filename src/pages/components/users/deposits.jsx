import React from "react";
import { Link } from "react-router-dom";
import User_layout from "./user_layout";

export default function Deposits() {
   const dum = [1, 2, 3, 5];
   return (
      <User_layout>
         <div className="investments">
            <div className="container">
               <div className="head py-3 px-1">
                  <span className="fs-3 fw-bold">Deposits History</span> <br />
                  <small>
                     Once your deposit is confirmed, your investment starts.
                     Kindly check <Link to={"/investments"}>investments</Link>{" "}
                     page to see all ongoing investment
                  </small>
               </div>
               <div className="body overflow-auto">
                  <table className="w-100 rounded overflow-auto bg-white">
                     <thead className="bg-black py-4 text-light">
                        <tr>
                           <th>Amount</th>
                           <th>Hash</th>
                           <th>Date</th>
                           <th>Status</th>
                        </tr>
                     </thead>
                     <tbody>
                        {dum.map((i, index) => (
                           <tr key={index}>
                              <td>23.8 USDT</td>
                              <td>
                                 <small>
                                    <a href="">check on bscscan</a>
                                 </small>
                              </td>
                              <td>10-20-2034</td>
                              <td>
                                 <small className="text-warning">
                                    processing
                                 </small>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </User_layout>
   );
}
