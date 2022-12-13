import React from "react";

const SearchBarComponent = () => {
  return (
    <div className="utility-bar__section utility-bar__search" id="SmartSearch" role="search" aria-labelledby="header-search">
      <div id="utilitySmartSearch" className="input-group utility-bar__element">
        <span className="input-group-addon utility-bar__search-icon icon-magnifier"></span>
        <label htmlFor="SearchInput" className="sr-only">Search</label>
        <input id="SearchInput" 
          type="text" 
          title="Click here to search" 
          className="form-control utility-bar__search-input" 
          placeholder="Search by Keywords, Part Numbers or VIN" 
          autoComplete="off" />
        <span className="input-group-btn" title="Search Button">
          <button type="button" className="btn btn-default utility-bar__search-button" id="searchBtn">
            Go
          </button>
        </span>
      </div>
    </div>
  );
};

export default SearchBarComponent;