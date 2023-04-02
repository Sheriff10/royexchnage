import React from "react";
import { Card } from "./card";
import data from "./services_data.json";

export const Services = () => {
   const card_arr = data.card;
   return (
      <>
         <Card
            card_arr={card_arr}
            card_slogan={"This is more details about our services"}
            card_title={"Services"}
         />
      </>
   );
};
