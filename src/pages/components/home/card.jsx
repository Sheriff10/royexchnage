import React from "react";
import { RiShieldCheckFill } from 'react-icons/ri';
import { FaChartLine, FaKey } from "react-icons/fa";
import { IoChatbubbleEllipses } from 'react-icons/io5';

export const Card = ({card_arr, card_title, card_slogan}) => {

   const icons = [<FaChartLine />, <RiShieldCheckFill />, <IoChatbubbleEllipses />]
   return (
      <div className="cards">
         <div className="container">
            <div className="card-title text-center p-5 ">
               <h1>{card_title}</h1>
               <span>{card_slogan}</span>
            </div>
            <div className="c-con">
               <div className="row justify-content-center">
                  {card_arr.map((i, index) => (
                     <div className="col-lg-4 col-sm-12 col-md-6" key={index}>
                        <div className={`c-card ${i.color} shadow`}>
                           <div className={`c-card-icon`}>
                              <i className={`${i.icon_color}`}>
                                 {icons[index]}
                              </i>
                           </div>
                           <div className="c-card-title text-center">
                              <p className="h4">
                                 <b>{i.title}</b>
                              </p>
                           </div>
                           <div className="c-card-text p-2 text-center">
                              <p>
                                 {i.text}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};
