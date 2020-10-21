import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { CREATE_CITY } from "./AddCity.gql";
import { Button } from "../Button";
import { City } from "../../fragments";
import * as Styled from "./AddCity.styled";

export const AddCity = () => {
  const [name, setName] = useState("");
  const [createCity] = useMutation(CREATE_CITY, {
    update: (cache, { data: { createCity } }) => {
      cache.modify({
        fields: {
          cities(existingCities = []) {
            const newCity = cache.writeFragment({
              data: createCity,
              fragment: City,
            });
            return [...existingCities, newCity];
          },
        },
      });
    },
  });

  return (
    <Styled.Main
      onSubmit={(e) => {
        e.preventDefault();
        createCity({
          variables: {
            name,
          },
        });
      }}
    >
      <Styled.Column>
        <Styled.Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></Styled.Input>
      </Styled.Column>
      <Button backgroundColor="#91c9a8" type="submit">
        Add City
      </Button>
    </Styled.Main>
  );
};
