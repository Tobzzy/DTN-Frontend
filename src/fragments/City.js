import { gql } from "@apollo/client";

export const City = gql`
  fragment City on City {
    _id
    name
    temperature
    windSpeed
    humidity
    timestamp
  }
`;
