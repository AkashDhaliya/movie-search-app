import React, { Component } from "react";
import Requests from "../RequestComponent/Requests";
import { API_KEY } from "../../Constants/Const";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Loading from "../LoadingSpinnerComponent/LoadingSpinner";
import MovieDetailComponent from "../MoviedetailsComponent/MovieDetailComponent";

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
      favItemsId: [],
      page_no: 1,
      totalResults: 0,
      isError: false,
      isResponse: true,
      showMovieDetail: "",
      movieDetailmodal: false,
      errorMessage: "Your search begins here.",
    };
  }

  componentDidMount() {
    this.setState({ favItemsId: Object.keys(localStorage) });
  }

  componentDidUpdate(prevProps) {
    if (this.checkToRenderOnUpdate(prevProps)) {
      let params = {
        apikey: API_KEY,
        s: this.props.searchQuery,
        type: this.props.searchType,
        plot: "full",
        page: 1,
      };
      this.setState({
        moviesList: [],
        isResponse: true,
        isError: false,
        errorMessage: "",
      });
      this.getSearchData(params);
    }
  }

  checkToRenderOnUpdate = (prevProps) => {
    const { searchQuery, searchType } = this.props;
    if (searchQuery.length !== 0) {
      if (searchQuery !== prevProps.searchQuery) {
        return true;
      } else if (searchQuery === prevProps.searchQuery) {
        if (searchType !== prevProps.searchType) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  };

  getSearchData = (params) => {
    Requests(params).then(
      (response) => {
        if (response.data.Response === "True") {
          let data = this.state.moviesList
            .concat(response.data.Search)
            .filter(function (item, index, data) {
              let dataIndex = data.findIndex(
                (ind) => ind.imdbID === item.imdbID
              );
              return dataIndex === index;
            });

          data = data.map((item) => {
            if (this.state.favItemsId.length !== 0) {
              this.state.favItemsId.map((favItem) => {
                if (favItem === item.imdbID) {
                  item.favourite = true;
                }
                return item;
              });
            } else {
              item.favourite = false;
            }
            return item;
          });
          this.setState({
            moviesList: data,
            totalResults: response.data.totalResults,
            isResponse: true,
            isError: false,
            page_no: data.length / 10,
          });
        } else {
          this.setState({
            moviesList: [],
            isResponse: true,
            isError: false,
            errorMessage: response.data.Error,
          });
        }
      },
      (error) => {
        this.setState({
          isResponse: true,
          isError: true,
          errorMessage:
            "Oops Something went wrong. Please check you r internet connection or connect with our technical support.",
        });
      }
    );
  };

  loadMoreData = (evt) => {
    let pageNo = this.state.moviesList.length / 10 + 1;
    if (
      evt.target.scrollHeight - evt.target.scrollTop < 1000 &&
      this.state.page_no !== pageNo &&
      this.state.isResponse &&
      parseInt(this.state.totalResults) !== this.state.moviesList.length
    ) {
      let params = {
        apikey: API_KEY,
        s: this.props.searchQuery,
        type: this.props.searchType,
        plot: "full",
        page: pageNo,
      };
      this.getSearchData(params);
    }
  };

  favouriteHandler = (data, evt) => {
    let favouriteAdded = false;
    if (localStorage.getItem(data.imdbID)) {
      localStorage.removeItem(data.imdbID);
      favouriteAdded = false;
    } else {
      localStorage.setItem(data.imdbID, JSON.stringify(data));
      favouriteAdded = true;
    }
    let immutedData = this.state.moviesList.map((item) => {
      if (item.imdbID === data.imdbID) {
        item.favourite = favouriteAdded;
        return item;
      }
      return item;
    });

    this.setState({
      moviesList: immutedData,
    });
    evt.stopPropagation();
  };

  showMovieDetails = (evt) => {
    let movieId = evt.currentTarget.dataset.imdbid;
    this.setState({ showMovieDetail: movieId, movieDetailmodal: true });
    evt.stopPropagation();
  };

  render() {
    const {
      isResponse,
      isError,
      moviesList,
      errorMessage,
      totalResults,
    } = this.state;
    if (isResponse && !isError) {
      return moviesList.length !== 0 ? (
        <section className="movieCardSec" onScroll={this.loadMoreData}>
          <MovieDetailComponent
            id={this.state.showMovieDetail}
            showMovieDetailmodal={this.state.movieDetailmodal}
            hideMovieDetailmodal={() =>
              this.setState({ showMovieDetail: "", movieDetailmodal: false })
            }
          />
          <div className="resultInfo">
            Showing&nbsp;{moviesList.length}&nbsp;out of&nbsp;{totalResults}
          </div>
          {moviesList.map((item) => {
            return (
              <div
                key={item.imdbID}
                className="movieCard"
                data-imdbid={item.imdbID}
                onClick={this.showMovieDetails}
              >
                <div className="container">
                  <h3>
                    <strong>{item.Title}</strong>&nbsp;
                  </h3>
                  <small>({item.Year})</small>
                </div>
                <div
                  className="favourite"
                  onClick={this.favouriteHandler.bind(null, item)}
                >
                  {item.favourite && <FaHeart className="liked" />}
                  {!item.favourite && <FaRegHeart />}
                </div>
                <img src={item.Poster} alt={item.Title} />
              </div>
            );
          })}
        </section>
      ) : (
        <section className="movieCardSec">
          <div className="errorMessage">{errorMessage}</div>
        </section>
      );
    } else if (isResponse && isError) {
      return (
        <section className="movieCardSec">
          <div className="errorMessage">{errorMessage}</div>
        </section>
      );
    } else {
      return (
        <section className="movieCardSec">
          <Loading />
        </section>
      );
    }
  }
}

export default MovieCard;
