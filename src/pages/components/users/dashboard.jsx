import axios from "axios";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import {
   FaDollarSign,
   FaMoneyBillWave,
   FaPaperPlane,
   FaTree,
   FaExclamationCircle,
} from "react-icons/fa";
import { tokenExpire } from "../../authentication/auth";
import User_layout from "./user_layout";

export default function Dashboard() {
   useEffect(() => {
      getStats();
   }, []);
   const [stats, setStats] = useState({
      balance: "...",
      investment_amount: "...",
      stakings: "...",
      withdrawals: "...",
      total_earnings: "...",
   });

   const getStats = async () => {
      try {
         const response = await axios.get(`${window.api}/client/user_stats`, {
            headers: {
               "x-auth-token": window.token,
               "Content-Type": "application/json",
            },
         });
         setStats(response.data);
         console.log(response);
      } catch (error) {
         console.log(error);
         if (error.response.data.message === "jwt expired") tokenExpire();
      }
   };
   const cardsFunc = (title, icon, text, caption, alertType) => {
      return { title, icon, text, caption, alertType };
   };
   const cardArr = [
      cardsFunc(
         "Balance",
         <FaDollarSign />,
         stats.balance,
         "Withdrawals excluded",
         "alert-danger"
      ),
      cardsFunc(
         "Investment",
         <FaTree />,
         stats.investment_amount,
         "Withdrawals excluded",
         "alert-primary"
      ),
      cardsFunc(
         "Total Investments",
         <FaPaperPlane />,
         stats.stakings,
         "Withdrawals excluded",
         "alert-warning"
      ),
      cardsFunc(
         "Withdrawals",
         <FaPaperPlane />,
         stats.withdrawals,
         "Withdrawals excluded",
         "alert-warning"
      ),
      cardsFunc(
         "Total Earnings",
         <FaMoneyBillWave />,
         stats.total_earnings,
         "Withdrawals excluded",
         "alert-secondary"
      ),
   ];

   // Date when the investment matures
   const maturityDate = new Date(); // Replace with the actual maturity date
   maturityDate.setDate(maturityDate.getDate() + 7); // Add 7 days

   // Current date and time
   const currentDate = new Date();

   // Calculate the difference in milliseconds between the two dates
   const timeDifferenceMs = maturityDate - currentDate;

   console.log(
      `Milliseconds left until investment matures: ${timeDifferenceMs}`
   );

   return (
      <User_layout>
         <div className="dashboard">
            <div className="container">
               <div className="d-head px-1 py-3">
                  <span className="fs-2 fw-bold fst-italic">Welcome Back!</span>
               </div>
               <div className="body">
                  <div className="row">
                     {cardArr.map((i, index) => (
                        <div className="col-lg-4 col-sm-6 col-12" key={index}>
                           <div className="cards bg-white  rounded p-3 mx-1 my-2 mb-4 shadow">
                              <div className="c-title d-flex justify-content-between align-item-center">
                                 <small className="fs-6 fw-bold text-muted">
                                    {i.title}
                                 </small>
                                 <i
                                    className={`alert ${i.alertType} px-2 py-1`}
                                 >
                                    {i.icon}
                                 </i>
                              </div>
                              <div className="c-text py-2">
                                 <small>$</small>
                                 <span className="fs-2 fw-bold">{i.text}</span>
                              </div>
                              <div className="c-caption">
                                 <small className="fw-light fst-italic">
                                    {i.caption}
                                 </small>
                              </div>
                           </div>
                        </div>
                     ))}
                     <Countdown date={Date.now() + timeDifferenceMs}>
                        <span>We are dine</span>
                     </Countdown>
                  </div>
               </div>
            </div>
         </div>
      </User_layout>
   );
}
