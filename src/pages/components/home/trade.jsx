import React from "react";
import { Card } from "./card";
import data from "./step.json";

export const HTrade = () => {
   const card_arr = data.card;
   return (
      <div id="ht">
         <Card
            card_arr={card_arr}
            card_slogan={"Follow the steps below to know to know how to trade with FirstPay"}
            card_title={"How To Trade"}
         />
      </div>
   );
};
