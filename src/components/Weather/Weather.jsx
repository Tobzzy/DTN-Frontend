import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_WEATHER_BY_NAME } from "./Weather.gql";
import * as Styled from "./Weather.styled";

export const Weather = () => {
  // const [city, setCity] = useState("");
  // const {
  //   data: {
  //     weather: { name, temperature, humidity, windSpeed, timestamp } = {},
  //   } = {},
  // } = useQuery(GET_WEATHER_BY_NAME, {
  //   variables: {
  //     name: city,
  //   },
  // });

  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("imperial");
  let [responseObj, setResponseObj] = useState({});
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  function getForecast(e) {
    e.preventDefault();
    if (city.length === 0) {
      return setError(true);
    }
    setError(false);
    setResponseObj({});
    setLoading(true);

    let uriEncodedCity = encodeURIComponent(city);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&appid=dc41eb0d7cf996cd76d4f0ab8a10ba6f`,
      {}
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.cod !== 200) {
          throw new Error();
        }
        setResponseObj(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log(err.message);
      });
  }
  console.log(responseObj);

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Forecast</button>
      </form>
    </div>
  );
};
