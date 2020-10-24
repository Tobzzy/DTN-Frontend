import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button } from "../Button";
import { GET_CITY_BY_ID } from "./StopPolling.gql";

export const StopPolling = ({ cityId, cityName }) => {
  const [stopCityPoll] = useMutation(GET_CITY_BY_ID, {
    variables: { id: cityId },
  });

  const [visibility, setVisibility] = useState(false);
  const [buttonTitle, setButtoTitle] = useState("Stop Polling");

  const handleClick = () => {
    stopCityPoll();
    window.alert(`polling stopped for ${cityName}`);
    setVisibility(true);
    setButtoTitle("Polling Stopped");
  };

  return (
    <Button
      backgroundColor="#ed3124"
      onClick={handleClick}
      disabled={visibility}
    >
      {buttonTitle}
    </Button>
  );
};
