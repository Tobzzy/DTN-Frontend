import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { CREATE_CITY } from "./AddCity.gql";
import { City } from "../../fragments";

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
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createCity({
            variables: {
              name,
            },
          });
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <button>Add City</button>
      </form>
    </div>
  );
};
