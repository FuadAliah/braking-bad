import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [search, setSearch] = useState("");

  const onChange = (q) => {
    setSearch(q);
    getQuery(q);
  };

  return (
    <form>
      <input
        type="search"
        className="search_input"
        placeholder="Find Character.."
        autoFocus
        value={search}
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
};

export default Search;
