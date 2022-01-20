import React from "react";
import Detail from "../components/Detail";
import { useState } from "react";

const Card = ({ brewery }) => {
  const [popup, setPopup] = useState(false);
  return (
    <div className="card">
      <p className="card_description">
        {brewery.name}
        <br />
        {brewery.brewery_type}
        <br />
        {brewery.city}
      </p>

      <button className="card_button" onClick={() => setPopup(true)}>
        View Detail
      </button>

      <Detail trigger={popup} setTrigger={setPopup} brewery={brewery} />
    </div>
  );
};

export default Card;
