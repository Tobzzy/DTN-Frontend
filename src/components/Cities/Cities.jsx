import React from "react";
import { useQuery } from "@apollo/client";

import { GET_CITIES } from "./Cities.gql";
import * as Styled from "./Cities.styled";
import { City } from "../City";

export const Cities = () => {
  const { data: { cities = [] } = {} } = useQuery(GET_CITIES);

  return (
    <Styled.Cities>
      {cities.map(({ name }) => (
        <City key={name} cityName={name} />
      ))}
    </Styled.Cities>
  );
};
