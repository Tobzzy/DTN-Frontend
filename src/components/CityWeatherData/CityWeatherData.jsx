import React from "react";
import { Bar } from "react-chartjs-2";

import { useQuery } from "@apollo/client";
import { GET_CITY_BY_ID } from "./CityWeatherData.gql";
import { Modal } from "../Modal";

export const CityWeatherData = ({ cityName, onClose }) => {
  const {
    data: {
      city,
      city: { name, temperature, humidity, windSpeed, timestamp } = {},
    } = {},
  } = useQuery(GET_CITY_BY_ID, {
    variables: { name: cityName },
  });
  const state = {
    labels: [timestamp],
    datasets: [
      {
        label: "Temperature",
        backgroundColor: "rgba(230,21,62,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [temperature],
      },
      {
        label: "Humidity",
        backgroundColor: "rgba(75,139,179,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [humidity],
      },
      {
        label: "Wind-Speed",
        backgroundColor: "rgba(202,237,26,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [windSpeed],
      },
    ],
  };

  return (
    <Modal onClose={onClose}>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: [name],
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
      {/* <p>{name}</p>
      <p>{temperature}</p>
      <p>{humidity}</p>
      <p>{windSpeed}</p>
      <p>{Date(timestamp * 1000)}</p> */}
    </Modal>
  );
};
