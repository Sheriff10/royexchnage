import React from "react";
import {
   FaDollarSign,
   FaMoneyBillWave,
   FaPaperPlane,
   FaTree,
} from "react-icons/fa";

export default function Dashboard() {
   const cardsFunc = (title, icon, text, caption, alertType) => {
      return { title, icon, text, caption, alertType };
   };
   const cardArr = [
      cardsFunc(
         "Balance",
         <FaDollarSign />,
         473,
         "Withdrawals excluded",
         "alert-danger"
      ),
      cardsFunc(
         "Investment",
         <FaTree />,
         200,
         "Withdrawals excluded",
         "alert-primary"
      ),
      cardsFunc(
         "Withdrawals",
         <FaPaperPlane />,
         30,
         "Withdrawals excluded",
         "alert-warning"
      ),
      cardsFunc(
         "Total Earnings",
         <FaMoneyBillWave />,
         85,
         "Withdrawals excluded",
         "alert-secondary"
      ),
   ];
   return (
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
                              <small className="fs-6 fw-bold text-muted">{i.title}</small>
                              <i className={`alert ${i.alertType} px-2 py-1`}>
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
               </div>
            </div>
         </div>
      </div>
   );
}
