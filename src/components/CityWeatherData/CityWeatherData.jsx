import React from "react";
import { Line } from "react-chartjs-2";

import { useQuery } from "@apollo/client";
import { GET_CITY_BY_NAME } from "./CityWeatherData.gql";
import { Modal } from "../Modal";
import { StopPolling } from "../StopPolling";

export const CityWeatherData = ({ cityName, onClose }) => {
  const { data: { city: { _id: cityId, name, weather } = {} } = {} } = useQuery(
    GET_CITY_BY_NAME,
    {
      variables: { name: cityName },
    }
  );

  const timestampData = weather.map(({ timestamp }) => timestamp);
  const temperatureData = weather.map(({ temperature }) => temperature);
  const humidityData = weather.map(({ humidity }) => humidity);
  const windSpeedData = weather.map(({ windSpeed }) => windSpeed);

  // var date = new Date(timestampData * 1000);
  // var hours = date.getHours();
  // var minutes = "0" + date.getMinutes();
  // var seconds = "0" + date.getSeconds();
  // var formattedTime =
  //   hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  // console.log(formattedTime);

  // console.log("timestampData", timestampData);
  // console.log("temperatureData", temperatureData);
  // console.log("humidityData", humidityData);
  // console.log("windSpeedData", windSpeedData);

  const state = {
    labels: timestampData,
    datasets: [
      {
        label: "Temperature",
        backgroundColor: "rgba(230,21,62,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: temperatureData,
      },
      {
        label: "Humidity",
        backgroundColor: "rgba(75,139,179,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: humidityData,
      },
      {
        label: "Wind-Speed",
        backgroundColor: "rgba(202,237,26,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: windSpeedData,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: [name],
      fontSize: 25,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      ],
    },
  };

  return (
    <Modal onClose={onClose}>
      <Line data={state} options={options} />
      <StopPolling cityId={cityId} cityName={cityName} />
    </Modal>
  );
};
