import React from "react";

const Detail = ({ brewery, trigger, setTrigger }) => {
  return trigger ? (
    <div className="card_detail">
      <h3>Showing details about each brewery</h3>
      <p className="card_detail_description">
        Name: {brewery.name}
        <br />
        Brewery type: {brewery.brewery_type}
        <br />
        Street: {brewery.street}
        <br />
        Address 2: {brewery.address_2}
        <br />
        Address 3: {brewery.address_3}
        <br />
        City: {brewery.city}
        <br />
        State: {brewery.state}
        <br />
        County: {brewery.county_province}
        <br />
        Postal code: {brewery.postal_code}
      </p>

      <button className="card_detail_button" onClick={() => setTrigger(false)}>
        Close
      </button>
    </div>
  ) : (
    ""
  );
};

export default Detail;
