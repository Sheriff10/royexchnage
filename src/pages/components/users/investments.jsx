import React from "react";
import User_layout from "./user_layout";

export default function Investments() {
   return (
      <User_layout>
         <div className="investments">
            <div className="container">
               <div className="head py-3 px-1">
                  <span className="fs-3 fw-bold">Ongoing Investments</span>
               </div>
               <div className="body overflow-auto">
                  <table className="w-100 rounded overflow-auto bg-white">
                     <thead className="bg-black py-4 text-light">
                        <tr>
                           <th>Name</th>
                           <th>ROI</th>
                           <th>Amount</th>
                           <th>Maturity</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>Premium Investment</td>
                           <td>45%</td>
                           <td>50 USDT</td>
                           <td>2:49:39:45</td>
                           <td>
                              <button className="btn btn-danger">Claim</button>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </User_layout>
   );
}
