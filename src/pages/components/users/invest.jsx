import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokenExpire } from "../../authentication/auth";

export default function Invest({ state, dispatch, toggle }) {
   const [err, setErr] = useState('')
   function copyAddress() {
      const tempInput = document.createElement("input");
      document.body.appendChild(tempInput);
      tempInput.value = "3EED5h1aVSEb7wLLmicocoSAbR3HoxtReX";
      tempInput.select();
      tempInput.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert(
         "Address copied to clipboard: " +
            "3EED5h1aVSEb7wLLmicocoSAbR3HoxtReX"
      );
   }
   const navigate = useNavigate()
   const handleSubmit = async (e) => {
      e.preventDefault();
      setErr('')

      try {
         const response = await axios.post(
            `${window.api}/client/staking`,
            state,
            {
               headers: {
                  "x-auth-token": window.sessionStorage.getItem("token"),
                  "Content-Type": "application/json",
               },
            }
         );
         if (response.data.message === "Staking recorded") navigate('/user/deposits')
         console.log(response)
      } catch (error) {
         console.log(error);
         if (error.response.data.message === "jwt expired") tokenExpire();
         if (error.response.data.error === "Hash exists") setErr('Hash already exists')
         console.log(error.response.data)
      }
   };

   return (
      <div className="invest position-absolute top-0 bottom-0 start-0 end-0">
         <div className="container">
            <div className="col-lg-6 mx-auto mt-5 col-sm-6 col-12">
               <div className="i-con bg-white shadow p-4 my-5 rounded">
                  <div className="x d-flex">
                     <span
                        className="fs-3 bg-danger px-3 rounded cursor-pointer"
                        role="button"
                        tabindex="0"
                        onClick={toggle}
                     >
                        x
                     </span>
                  </div>
                  <div className="head pb-4 text-center">
                     <span className="fw-bold fs-3">{state.staking_name}</span>
                  </div>
                  <div className="body">
                     <form action="" onSubmit={handleSubmit}>
                        {err !== "" && (
                           <div className="alert alert-danger"><span>{err}</span></div>
                        )}
                        <table className="w-100">
                           <tr>
                              <th>Staking Plan</th>
                              <td className="text-end">{state.staking_name}</td>
                           </tr>
                           <tr>
                              <th>APY</th>
                              <td className="text-end">{state.staking_apy}</td>
                           </tr>
                           <tr>
                              <th>Staking days</th>
                              <td className="text-end">{state.staking_days}</td>
                           </tr>
                           <tr>
                              <th>Deposit Address</th>
                              <td className="text-end">
                                 <small
                                    onClick={copyAddress}
                                    className="text-break"
                                 >
                                    3EED5h1aVSEb7wLLmicocoSAbR3HoxtReX
                                 </small>
                              </td>
                           </tr>
                           <tr>
                              <th>Staking Amount</th>
                              <td className="text-end">
                                 <input
                                    type="number"
                                    className="form-control"
                                    placeholder="$200 - $4999"
                                    min={200}
                                    value={state.deposit_amount}
                                    onChange={(e) =>
                                       dispatch({
                                          type: "DEPOSIT_AMOUNT",
                                          payload: e.target.value,
                                       })
                                    }
                                    required
                                 />
                              </td>
                           </tr>
                           <tr>
                              <th>TXN Hash</th>
                              <td className="text-end">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="transaction hash"
                                    value={state.deposit_hash}
                                    onChange={(e) =>
                                       dispatch({
                                          type: "DEPOSIT_HASH",
                                          payload: e.target.value,
                                       })
                                    }
                                    required
                                 />
                              </td>
                           </tr>
                        </table>

                        <div className="btn-con pt-5">
                           <button className="btn btn-danger w-100 rounded-pill">
                              Invest
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
