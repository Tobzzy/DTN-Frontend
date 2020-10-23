import { gql } from "@apollo/client";

export const GET_CITY_BY_ID = gql`
  mutation StopCityPoll($id: ID!) {
    stopCityPoll(_id: $id) {
      response
    }
  }
`;
