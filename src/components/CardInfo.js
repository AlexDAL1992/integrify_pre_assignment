import React from "react";
import Card from "../components/Card";
import "./Card.css";

const CardInfo = ({ cardInfo }) => (
  <div className="cardInfo">
    {cardInfo.map((brewery) => {
      return <Card key={brewery.id} brewery={brewery} />;
    })}
  </div>
);

export default CardInfo;
