import React, { useState } from "react";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [searchDropdown, setSearchDropdown] = useState("");

  function submitSearch() {
    if (searchValue !== "") {
      props.setSearch(searchValue, searchDropdown);
    }
  }

  function searchHandler(evt) {
    let value = evt.target.value;
    let validate = value.length === 0 ? true : detectInputValidation(evt);
    if (validate) {
      setSearchValue(value);
      setInputError("");
    } else {
      setInputError("Special character not allowed excluding : and -");
      setTimeout(function () {
        setInputError("");
      }, 3000);
    }
  }

  function detectInputValidation(evt) {
    const regex = new RegExp(/^[a-z\d\-:\s]+$/i);
    if (regex.test(evt.target.value)) {
      return true;
    }
    return false;
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
        <select
          className="search-category"
          value={searchDropdown}
          onChange={(e) => setSearchDropdown(e.target.value)}
          name="searchDropdown"
        >
          <option value="">Options</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
        <button className="search-btn" onClick={submitSearch}>
          Search
        </button>
      </div>
      <div className="search-input-error">{inputError}</div>
    </section>
  );
}

export default Search;
