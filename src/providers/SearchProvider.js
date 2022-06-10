import { useState } from "react";
import SearchContext from "../contexts/SearchContext";

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
