import { gql } from "@apollo/client";

import { City } from "../../fragments";

export const GET_CITIES = gql`
  query {
    cities {
      ...City
    }
  }
  ${City}
`;
