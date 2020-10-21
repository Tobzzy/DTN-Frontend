import React from "react";
import { useQuery } from "@apollo/client";

import { GET_CITIES } from "./Cities.gql";
import { City } from "../City";

export const Cities = () => {
  const { data: { cities = [] } = {} } = useQuery(GET_CITIES);

  return cities.map(({ name }) => <City key={name} cityName={name} />);
};
