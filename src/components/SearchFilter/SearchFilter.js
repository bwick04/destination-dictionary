import React from "react";
import "./SearchFilter.css";

const SearchFilter = ({ filterCountries }) => {
  return (
    <div className="search-filter-container">
      <input
        type="text"
        pattern="[a-zA-Z]"
        className="search-filter"
        data-testid="search-filter"
        placeholder="Search country name..."
        onChange={filterCountries}
      />
      <i className="fa fa-search" />
    </div>
  );
};

export default SearchFilter;
