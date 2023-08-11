import React from "react";

export default function Invest({ state, dispatch, toggle }) {
   function copyAddress() {
      const tempInput = document.createElement("input");
      document.body.appendChild(tempInput);
      tempInput.value = "0xf825776e971da4400D9C98B09ee87ECb741bA301";
      tempInput.select();
      tempInput.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert(
         "Address copied to clipboard: " +
            "0xf825776e971da4400D9C98B09ee87ECb741bA301"
      );
   }

   return (
      <div className="invest position-absolute top-0 bottom-0 start-0 end-0">
         <div className="container">
            <div className="col-lg-6 mx-auto mt-5 col-sm-6 col-12">
               <div className="i-con bg-white shadow p-4 my-5 rounded">
                <div className="x d-flex">
                    <span className="fs-3 bg-danger px-3 rounded cursor-pointer" role="button" tabindex="0" onClick={toggle}>x</span>
                </div>
                  <div className="head pb-4 text-center">
                     <span className="fw-bold fs-3">{state.staking_name}</span>
                  </div>
                  <div className="body">
                     <table className="w-100">
                        <tr>
                           <th>Staking Plan</th>
                           <td>{state.staking_name}</td>
                        </tr>
                        <tr>
                           <th>APY</th>
                           <td>{state.staking_apy}</td>
                        </tr>
                        <tr>
                           <th>Staking days</th>
                           <td>{state.staking_days}</td>
                        </tr>
                        <tr>
                           <th>Deposit Address</th>
                           <td>
                              <small onClick={copyAddress}>
                                 0xf825776e971da4400D9C98B09ee87ECb741bA301
                              </small>
                           </td>
                        </tr>
                        <tr>
                           <th>Staking Amount</th>
                           <td>
                              <input
                                 type="number"
                                 className="form-control"
                                 placeholder="10 USDT"
                                 value={state.deposit_amount}
                                 onChange={(e) =>
                                    dispatch({
                                       type: "DEPOSIT_AMOUNT",
                                       payload: e.target.value,
                                    })
                                 }
                              />
                           </td>
                        </tr>
                        <tr>
                           <th>TXN Hash</th>
                           <td>
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
                              />
                           </td>
                        </tr>
                     </table>
                     <div className="btn-con pt-5">
                        <button className="btn btn-danger w-100 rounded-pill">
                           Invest
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
