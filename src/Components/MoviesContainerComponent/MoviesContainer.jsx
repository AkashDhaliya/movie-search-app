import React, { useState } from "react";
import Search from "../SearchComponent/Search";
import MovieCard from "../MoviesCardComponent/MovieCard";

function MoviesContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("");

  function search(query, type) {
    setSearchQuery(query);
    setSearchType(type);
  }
  return (
    <section className="moviesContainerSec">
      <Search setSearch={search} />
      <MovieCard searchQuery={searchQuery} searchType={searchType} />
    </section>
  );
}

export default MoviesContainer;
