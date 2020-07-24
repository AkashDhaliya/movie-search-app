import React, { useState } from "react";
import Search from "../SearchComponent/Search";
import MoviesList from "../MoviesComponent/MoviesList";

function MoviesContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("");

  function search(query, type) {
    setSearchQuery(query);
    setSearchType(type);
    console.log(query);
    console.log(type);
  }
  return (
    <section className="moviesContainerSec">
      <Search setSearch={search} />
      <MoviesList searchQuery={searchQuery} searchType={searchType} />
    </section>
  );
}

export default MoviesContainer;
