import React from "react";
import { FaKey, FaShieldVirus, FaSmile } from "react-icons/fa";

export const Intro = () => {
   return (
      <div className="intro">
         <div className="wrapper">
            <div className="container">
               <div className="row c">
                  <div className="col-lg-6 col-sm-12 col-md-12">
                     <h1 className="fw-bold">THE HOME OF TRADE. <br /> ROY EXCHANGE, TRADE WITH COMFORT </h1>
                     <small className="h4  text-">
                        FirstPay, the home of trading
                     </small>
                     <div className="sm-text">
                        <div className="row">
                           <div className="col">
                              <small><FaKey /> Safe </small>
                           </div>
                           <div className="col">
                              <small><FaSmile /> Easy </small>
                           </div>
                           <div className="col">
                              <small> <FaShieldVirus /> Securely</small>
                           </div>
                        </div>
                     </div>
                     <div className="btn-con mt-2">
                        <div className="row">
                           <a href="" className="btn btn-danger col-4">
                              Trade now
                           </a>
                           <a href="" className="btn btn-danger col-4 ls">
                              Learn How
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
