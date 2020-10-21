import { gql } from "@apollo/client";

import { City } from "../../fragments";

export const GET_CITY_BY_ID = gql`
  query($name: String!) {
    product(name: $name) {
      ...City
    }
  }
  ${City}
`;
