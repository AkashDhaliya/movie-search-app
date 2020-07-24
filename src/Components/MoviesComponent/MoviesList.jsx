import React, { Component } from "react";
import Requests from "../RequestComponent/Requests";
import { API_KEY } from "../../Constants/Const";
import Loading from "../LoadingSpinnerComponent/LoadingSpinner";

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
      pageNo: 1,
      isError: false,
      isResponse: true,
    };
  }

  componentDidMount() {
    this.getSearchData();
  }

  getSearchData=()=>{
    let params = {
        apikey: API_KEY,
        s: "Ant",
        plot: "full",
        page: 1,
      };
      Requests(params).then(
        (response) => {
          let data = response.data.Search.map((item) => {
            return (
              <div key={item.imdbID} className="movieCard">
                  <div className="container">
                  <h3>
                    <strong>{item.Title}</strong>
                  </h3>
                </div>
                <img src={item.Poster} alt={item.Title} />
                
              </div>
            );
          });
          this.setState({ moviesList: data, isResponse: true, isError: false });
  
          console.log(response.data);
        },
        (error) => {
          this.setState({ isResponse: true, isError: true });
        }
      );
  }

  render() {
    const { isResponse, isError, moviesList } = this.state;
    if (isResponse && !isError) {
      return moviesList.length !== 0 ? (
        <section className="moviesListSec">{moviesList}</section>
      ) : (
        <section className="moviesListSec">
          <div className="moviesListSec">No data available</div>
        </section>
      );
    } else if (isResponse && isError) {
      return (
        <section className="moviesListSec">
          <div className="moviesListSec">Oops Something went wrong while getting data.</div>
        </section>
      );
    } else {
      return (
        <section className="moviesListSec">
          <Loading />
        </section>
      );
    }
  }
}

export default MoviesList;
