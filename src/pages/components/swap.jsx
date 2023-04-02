import React from "react";
import { FaClipboard, FaArrowAltCircleDown } from "react-icons/fa";

export const Trade = () => {
   return (
      <div className="swap">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-sm-12 col-md-8">
                  <div className="s-head">
                     <span className="h4"> Buy USDT @ Faster and cheaper rate</span>
                  </div>
                  <div className="s-card bg-danger text-light">
                    <label>YOU SPEND</label>
                     <div class="input-group mb-3">
                        <div
                           class="btn"
                           type="button"
                           id="button-addon1"
                        >
                           <img src="ngn.png" alt="usdt_img" />
                        </div>
                        <input
                           type="text"
                           class="form-control"
                           placeholder="NAIRA"
                           aria-label="Example text with button addon"
                           aria-describedby="button-addon1"
                        />
                     </div>
                     <div className="s-arrow text-center">
                        <FaArrowAltCircleDown />
                     </div>
                    <label>YOU RECIEVE</label>
                     <div class="input-group mb-3">
                        <div
                           class="btn"
                           type="button"
                           id="button-addon1"
                        >
                           <img src="usdt.png" alt="usdt_img" />
                        </div>
                        <input
                           type="text"
                           class="form-control"
                           placeholder="USDT"
                           aria-label="Example text with button addon"
                           aria-describedby="button-addon1"
                        />
                     </div>
                     <label>Recieving Address</label>
                     <div class="input-group mb-3">
                        <input
                           type="text"
                           class="form-control"
                           placeholder="Input address recieving the USDT"
                           aria-describedby="button-addon1"
                        />
                     </div> <br />
                     <div className="btn btn-buy \">
                        Buy Now
                     </div>
                     <table width={'100%'} className=''>
                        <tr>
                            <th>Rate per $</th>
                            <td>#700</td>
                        </tr>
                        <tr>
                            <th>Floating Fee</th>
                            <td>#0.00</td>
                        </tr>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
