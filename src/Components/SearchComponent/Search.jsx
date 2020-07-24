import React, { useState } from "react";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");
  const [searchDropdown, setSearchDropdown] = useState("");

  function submitSearch() {
    if (searchValue !== "") {
      props.query(searchValue);
    }
  }

  function searchHandler(e){

  }

  return (
    <section>
      <div className="search-section">
        <input
          onChange={searchHandler}
          maxLength="50"
          autoComplete="off"
          type="text"
          value={searchValue}
          placeholder="Search..."
          name="search"
        />
        <select className="search-category" value={searchDropdown} onChange={(e)=>setSearchDropdown(e.target.value)} name="searchDropdown">
          <option value="">Options</option>
          <option value="Movies">Movies</option>
          <option value="Series">Series</option>
          <option value="Episodes">Episodes</option>
        </select>
        <button className="search-btn" onClick={submitSearch}>
          Search
        </button>
      </div>
      <div className="search-input-error">
        Please enter alphanumeric characters only.{" "}
      </div>
    </section>
  );
}

export default Search;
