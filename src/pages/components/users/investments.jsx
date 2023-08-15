import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { tokenExpire } from "../../authentication/auth";
import User_layout from "./user_layout";

export default function Investments() {
   const [investments, setInvestments] = useState([]);
   useEffect(() => {
      getInvestments();
   }, []);

   const getInvestments = async () => {
      try {
         const response = await axios.get(
            `${window.api}/client/get_investments`,
            {
               headers: {
                  "x-auth-token": window.token,
                  "Content-Type": "application/json",
               },
            }
         );
         setInvestments(
            response.data.message === "No investment" ? [] : response.data
         );
         console.log(investments);
         console.log(response.data);
      } catch (error) {
         console.log(error);
         if (error.response.data.message === "jwt expired") tokenExpire();
      }
   };
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
                           <th>apy</th>
                           <th>Amount</th>
                           <th>ROI</th>
                           <th>Maturity</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {investments.map((i, index) => (
                           <tr key={index}>
                              <td>{i.name}</td>
                              <td>{i.apy}%</td>
                              <td>{i.amount} USDT</td>
                              <td>{i.amount * (i.apy/100) + i.amount} USDT</td>
                              <td>2:49:39:45</td>
                              <td>
                                 <button className="btn btn-danger">
                                    Claim
                                 </button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  {investments.length === 0 && (
                     <div className="fw-bold text-center py-5 bg-gray border-bottom border-danger shadow rounded">
                        <span>
                           <FaExclamationCircle /> No Investments
                        </span>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </User_layout>
   );
}
