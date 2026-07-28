import { useState } from "react";

export const useTimezones = () => {
  const localStorageTimezone = localStorage.getItem("timezone");
  const [timezone, setTimezone] = useState(
    localStorageTimezone ?? "Europe/London",
  );

  const changeTimezone = (val: string) => {
    setTimezone(val);
    localStorage.setItem("timezone", val);
  };
  return { timezone, changeTimezone };
};
