import React, { useReducer, useState } from "react";
import { FaBtc } from "react-icons/fa";
import {
   INITIAL_STAKING_REDUCER,
   stakingReducer,
} from "../../../reducers/stakingReducer";
import Invest from "./invest";
import User_layout from "./user_layout";

export default function Staking() {
   const [invest, setInvest] = useState(false);
   const investmentFunc = (name, apy, days) => {
      return { name, apy, days };
   };
   const investmentArr = [
      investmentFunc("Primary Investment", "21", "7 Days"),
      investmentFunc("Secondary Investment", "35", "7 Days"),
      investmentFunc("Golden Investment", "1,080", "180 Days"),
   ];
   const [state, dispatch] = useReducer(
      stakingReducer,
      INITIAL_STAKING_REDUCER
   );

   const stakingData = (name, apy, days) => {
      dispatch({ type: "STAKING_DATA", payload: { name, apy, days } });
      toggleInvest();
      console.log(state);
   };
   const toggleInvest = () => setInvest(!invest);
   return (
      <User_layout>
         <div className="staking position-relative">
            <div className="s-head fw-bold  text-center p-3 text-">
               <h2 className="fw-bold text-uppercase">Staking</h2>
               <span>Invest and Earn</span>
            </div>
            <div className="container">
               <div className="row">
                  {investmentArr.map((i, index) => (
                     <div
                        className="col-lg-4 col-sm-6 col-12 p-lg-4 mb-4 "
                        key={index}
                     >
                        <div className="s-card my-5 shadow p-4 rounded">
                           <div className="s-card-head">
                              <div className="d-flex s-img justify-content-between pb-3 fw-bold fs-3">
                                 <span> STAKE USDT</span>
                                 <img
                                    src="/usdt.png"
                                    alt="usdt"
                                    className="img-fluid"
                                    width={50}
                                 />
                              </div>
                              <div className="s-body">
                                 <div className="apr">
                                    <small className="text-muted ">APR</small>{" "}
                                    <br />
                                    <span className="fw-bold fs-5 text-success">
                                       {i.apy}{" "}
                                       <small className="text-muted ">%</small>
                                    </span>
                                 </div>{" "}
                                 <br />
                                 <div className="time d-flex">
                                    <div className="col">
                                       <small className="text-muted ">
                                          Duration
                                       </small>{" "}
                                       <br />
                                       <span className="fw-bold fs-5 text-success">
                                          {i.days}
                                       </span>
                                    </div>
                                    <div className="col">
                                       <small className="text-muted ">
                                          Name
                                       </small>{" "}
                                       <br />
                                       <span className="fw-bold">{i.name}</span>
                                    </div>
                                 </div>
                                 <button
                                    className="btn w-100 fw-bold btn-danger mt-3"
                                    onClick={() =>
                                       stakingData(i.name, i.apy, i.days)
                                    }
                                 >
                                    Stake Now
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            {invest === true && (
               <Invest
                  state={state}
                  dispatch={dispatch}
                  toggle={toggleInvest}
               />
            )}
         </div>
      </User_layout>
   );
}
