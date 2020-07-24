import React, { Component } from "react";
import Search from "../SearchComponent/Search";
import MoviesList from "../MoviesComponent/MoviesList";

class MoviesContainer extends Component {
  render() {
    return (
      <section className="moviesContainerSec">
        <Search />
        <MoviesList />
      </section>
    );
  }
}

export default MoviesContainer;
