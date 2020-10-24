import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import { useSubscription, useQuery } from "@apollo/client";
import { GET_CITY_BY_NAME, CITY_SUBSCRIPTION } from "./CityWeatherData.gql";
import { Modal } from "../Modal";
import { StopPolling } from "../StopPolling";

export const CityWeatherData = ({ cityName, onClose }) => {
  const [timestampData, setTimestampData] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  const [windSpeedData, setWindSpeedData] = useState([]);

  const {
    data: {
      city: { _id: cityId, name, weather: initialWeather = [] } = {},
    } = {},
  } = useQuery(GET_CITY_BY_NAME, {
    variables: { name: cityName },
  });

  useEffect(() => {
    setTimestampData(initialWeather.map(({ timestamp }) => timestamp));
    setTemperatureData(initialWeather.map(({ temperature }) => temperature));
    setHumidityData(initialWeather.map(({ humidity }) => humidity));
    setWindSpeedData(initialWeather.map(({ windSpeed }) => windSpeed));
  }, [initialWeather]);

  useSubscription(CITY_SUBSCRIPTION, {
    variables: { name: cityName },
    onSubscriptionData: ({
      subscriptionData: {
        data,
        data: { city: { weather: newWeather = [] } = {} } = {},
      },
    }) => {
      setTimestampData(newWeather.map(({ timestamp }) => timestamp));
      setTemperatureData(newWeather.map(({ temperature }) => temperature));
      setHumidityData(newWeather.map(({ humidity }) => humidity));
      setWindSpeedData(newWeather.map(({ windSpeed }) => windSpeed));
    },
  });

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

  console.log("state", state);

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
