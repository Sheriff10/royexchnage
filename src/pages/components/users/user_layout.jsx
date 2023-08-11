import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import UserHeader from "./userHeader";

function User_layout({ children }) {
   const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth  < 780 ? false :  true);

   return (
      <div className="u-layout">
         <div className={`container-fluid`}>
            <div className="row">
               <div className={`col-lg-2 hh col-md-2 p-0 sidebar ${sidebarOpen && 'open'}`}>
                  <UserHeader />
               </div>
               <div className="col p-0 min-h-100vh ">
                  <nav className="d-flex px-1 sticky-top bg-white">
                     <i
                        className="bg-danger text-white px-2 pb-2 fs-5"
                        role="button"
                        tabindex="0"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                     >
                        <FaBars />
                     </i>
                  </nav>
                  {children}
               </div>
            </div>
         </div>
      </div>
   );
}

export default User_layout;
