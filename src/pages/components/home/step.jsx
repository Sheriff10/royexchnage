import React from "react";
import { Card } from "./card";
import data from "./step.json";

export function Step() {
    const card_arr = data.card;
    return (
        <div className="Step">
            <div className="container">
                <Card
                    card_arr={card_arr}
                    card_slogan="follow the step on how to trade with us"
                    card_title={"How To Trade Cryoto"} />
            </div>
        </div>
    );
}
