import React, { useState, useEffect } from "react";
import axios from "axios";
import CardInfo from "./components/CardInfo";
import "./App.css";

const App = () => {
  const [breweries, setBreweries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries?per_page=10`)
      .then((res) => setBreweries(res.data));
  }, []);

  const search = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://api.openbrewerydb.org/breweries?per_page=10&by_name=${searchTerm}`
      )
      .then((res) => setBreweries(res.data));
  };

  const Search = () => (
    <div className="search">
      <div>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search by name ..."
          onChange={({ target }) => setSearchTerm(target.value)}
        />
        <button onClick={search}>Search Brewery</button>
      </div>
    </div>
  );

  return (
    <div className="App">
      {Search()}
      <CardInfo cardInfo={breweries} />
    </div>
  );
};

export default App;
