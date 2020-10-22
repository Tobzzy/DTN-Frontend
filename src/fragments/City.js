import { gql } from "@apollo/client";

export const City = gql`
  fragment City on City {
    _id
    name
    weather {
      _id
      temperature
      windSpeed
      humidity
      timestamp
    }
  }
`;
