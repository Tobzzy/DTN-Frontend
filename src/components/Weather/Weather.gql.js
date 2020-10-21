import { gql } from "@apollo/client";

import { Weather } from "../../fragments";

export const GET_WEATHER_BY_NAME = gql`
  query($name: String!) {
    weather(name: $name) {
      _id
      name
      temperature
      windSpeed
      humidity
      timestamp
    }
  }
`;
