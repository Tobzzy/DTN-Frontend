import { gql } from "@apollo/client";

import { City } from "../../fragments";

export const CREATE_CITY = gql`
  mutation CreateCity($name: String!) {
    createCity(data: { name: $name }) {
      ...City
    }
  }
  ${City}
`;

export const GET_CITIES = gql`
  query {
    cities {
      ...City
    }
  }
  ${City}
`;
