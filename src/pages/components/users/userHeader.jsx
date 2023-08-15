import React from "react";
import { Fa500Px, FaChartLine, FaCoins, FaExchangeAlt, FaHandHoldingUsd, FaHistory, FaMoneyBill, FaTachometerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserHeader = () => {
   const linkFunc = (icon, name, link) => {
      return { icon, name, link };
   };
   const linkArr = [
      linkFunc(<FaTachometerAlt />, "Dashboard", "/user/dashboard"),
      linkFunc(<FaHandHoldingUsd />, "Staking", "/user/staking"),
      linkFunc(<FaChartLine />, "Investment", "/user/investments"),
      linkFunc(<FaCoins />, "Deposit History", "/user/deposits"),
      linkFunc(<FaMoneyBill />, "Withdraw", "/user/withdraw"),
      linkFunc(<FaCoins />, "Withdrawal History", "/user/withdraw-history"),
   ];

   return (
      <div className="u-header bg-danger h-100">
         <header className="bg-danger text-center py-3 text-white">
            <span className="fs-6 fw-bold">Welcome, Sheezey </span>
         </header>
         <ul className="p-0 m-0">
            {linkArr.map((i, index) => (
               <NavLink to={i.link} key={index}>
                  {i.icon} {i.name}
               </NavLink>
            ))}
         </ul>
      </div>
   );
};

export default UserHeader;
