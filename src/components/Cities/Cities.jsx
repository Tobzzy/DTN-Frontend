import React from "react";
import { useQuery } from "@apollo/client";

import { GET_CITIES } from "./Cities.gql";
import * as Styled from "./Cities.styled";
import { City } from "../City";

export const Cities = () => {
  const { data: { cities = [] } = {} } = useQuery(GET_CITIES);

  return (
    <Styled.Cities>
      {cities.map((element, index) => (
        <City key={index} cityName={element.name} />
      ))}
    </Styled.Cities>
  );
};
