import React from "react";
import faqs_content from "./faqs_data.json";

export const Faqs = () => {
   return (
      <div className="faqs">
         <div className="container">
            <div className="f-head">
               <h1>Frequently Ask Question (FAQs)</h1>
            </div>
            <div className="f-body">
               <div className="accordion" id="accordionExample">
                  {faqs_content.faqs.map((i, index) => (
                     <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={i.id}>
                           <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`${i.data_bs_target}`}
                              aria-expanded="true"
                              aria-controls={`${i.arial}`}
                           >
                              <span className="">
                                <b>{i.title}</b>
                              </span>
                           </button>
                        </h2>
                        <div
                           id={i.arial}
                           className="accordion-collapse collapse"
                           aria-labelledby={`${i.id}`}
                           data-bs-parent="#accordionExample"
                        >
                           <div className="accordion-body">{i.content}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};
