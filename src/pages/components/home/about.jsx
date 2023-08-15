import React from "react";

export const About = () => {
   return (
      <div className="about" id="about">
         <div className="a-wrap">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-12 col-md-8">
                     <div className="simg">
                        <img
                           src="sp.png"
                           alt="secure pc"
                           className="img-fluid"
                           width={500}
                        />
                     </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-8">
                     <div className="s-text">
                        <div className="s-text-head">
                           <h1>TetherX Services</h1>
                        </div>
                        <div className="s-text-body">
                           <p>
                           At TetherX, we are committed to providing a comprehensive range of services designed to empower your financial journey. Our services are built on the principles of security, innovation, and customer-centricity. From investment opportunities that yield remarkable returns to a secure and user-friendly platform, we've got you covered. Explore our offerings and experience a new level of financial growth and peace of mind. With TetherX, your financial aspirations are our top priority
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
