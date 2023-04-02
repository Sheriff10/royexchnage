import React from "react";

export const About = () => {
   return (
      <div className="about">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-sm-12 col-md-8">
                  <div className="s-img">
                    <img src="sp.png" alt="secure pc" className="img-fluid" />
                  </div>
               </div>
               <div className="col-lg-6 col-sm-12 col-md-8">
                  <div className="s-text">
                     <div className="s-text-head">
                        <h1>Our Services</h1>
                     </div>
                     <div className="s-text-body">
                        <p>
                           Lorem ipsum dolor sit, amet consectetur adipisicing
                           elit. Quo tempora fugit possimus aut beatae eos
                           officiis a, perferendis, praesentium error maxime
                           laboriosam ut! Molestiae architecto esse aspernatur
                           unde earum eveniet.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
