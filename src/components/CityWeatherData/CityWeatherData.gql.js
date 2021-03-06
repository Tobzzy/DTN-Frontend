import { gql } from "@apollo/client";

import { City } from "../../fragments";

export const GET_CITY_BY_NAME = gql`
  query($name: String!) {
    city(name: $name) {
      ...City
    }
  }
  ${City}
`;

export const CITY_SUBSCRIPTION = gql`
  subscription($name: String!) {
    city(name: $name) {
      ...City
    }
  }
  ${City}
`;
