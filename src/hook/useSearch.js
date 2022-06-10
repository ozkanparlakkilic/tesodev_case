import { useContext } from "react";
import SearchContext from "../contexts/SearchContext";

export const useSearch = () => {
  return useContext(SearchContext);
};
