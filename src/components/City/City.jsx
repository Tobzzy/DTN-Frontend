import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { CityWeatherData } from "../CityWeatherData";
import * as Styled from "./City.styled";

import { GET_CITY_BY_NAME } from "./City.gql";

export const City = ({ cityName }) => {
  const [cityDataVisible, setcityDataVisible] = useState();
  const { data: { city: { name } = {} } = {} } = useQuery(GET_CITY_BY_NAME, {
    variables: { name: cityName },
  });

  return (
    <>
      {cityDataVisible && (
        <CityWeatherData
          onClose={() => setcityDataVisible(false)}
          cityName={cityName}
          visible={cityDataVisible}
        />
      )}
      <Styled.City onClick={() => setcityDataVisible(true)}>
        <span>{name}</span>
      </Styled.City>
    </>
  );
};
