import { useQuery } from "@tanstack/react-query";
import { getAllAccommodationSearchData } from "../api";
import { AccommodationSearchParams } from "../search.types";
import { useEffect, useState } from "react";

export const useAccommodationsSearchQuery = ({ startDate, endDate, guest, name }: AccommodationSearchParams) => {
  return useQuery({
    queryKey: ["useAccommodationsSearchQuery", useDebounce(name, 400)],
    queryFn: () => getAllAccommodationSearchData({ startDate, endDate, guest, name }),
  });
};

export const useDebounce = (inputValue: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};
