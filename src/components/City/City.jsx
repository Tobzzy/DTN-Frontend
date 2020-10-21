import React from "react";
import { useQuery } from "@apollo/client";

import { GET_CITY_BY_ID } from "./City.gql";

export const City = ({ cityName }) => {
  const { data: { city: { name } = {} } = {} } = useQuery(GET_CITY_BY_ID, {
    variables: { name: cityName },
  });

  return (
    <>
      <div>
        <span>{cityName}</span>
      </div>
    </>
  );
};
