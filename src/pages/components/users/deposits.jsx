import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { tokenExpire } from "../../authentication/auth";
import User_layout from "./user_layout";

export default function Deposits() {
   const [deposits, setDeposits] = useState([]);
   useEffect(() => {
      getDeposits();
   }, []);
   const getDeposits = async () => {
      try {
         const response = await axios.get(
            `${window.api}/client/deposit_history`,
            {
               headers: {
                  "x-auth-token": window.token,
                  "Content-Type": "application/json",
               },
            }
         );
         setDeposits(response.data);
         console.log(response);
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
                        {deposits.map((i, index) => (
                           <tr key={index}>
                              <td>{i.deposit_amount} USDT</td>
                              <td>
                                 <small>
                                    <a href={i.hash}>check on bscscan</a>
                                 </small>
                              </td>
                              <td>{i.staking_Date}</td>
                              <td>
                                 <small
                                    className={` badge bg-${
                                       i.deposit_status === "processing"
                                          ? "danger"
                                          : "success"
                                    }`}
                                 >
                                    {i.deposit_status}
                                 </small>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  {deposits.length === 0 && (
                     <div className="fw-bold text-center py-5 bg-gray border-bottom border-danger shadow rounded">
                        <span>
                           <FaExclamationCircle /> No Deposit
                        </span>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </User_layout>
   );
}
