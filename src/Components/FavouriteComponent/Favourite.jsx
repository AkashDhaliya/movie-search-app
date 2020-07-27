import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import Loading from "../LoadingSpinnerComponent/LoadingSpinner";

function Favourite() {
  const [favourites, setFavourites] = useState(null);

  useEffect(() => {
    getFavItems();
  }, []);

  function getFavItems() {
    let values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    setFavourites(values);
  }

  function favouriteHandler(data) {
    if (
      window.confirm(
        `Are you sure you want to remove\r ${data.Title} from favourites?`
      )
    ) {
      localStorage.removeItem(data.imdbID);
      getFavItems();
    }
  }

  if (favourites !== null && favourites.length !== 0) {
    return (
      <section className="favouriteMoviesListSec">
        <div className="resultInfo">
          Total favourite items&nbsp;:&nbsp;{favourites.length}
        </div>
        {favourites.map((item) => {
          return (
            <div key={item.imdbID} className="movieCard">
              <div className="container">
                <h3>
                  <strong>{item.Title}</strong>&nbsp;
                </h3>
                <small>({item.Year})</small>
              </div>
              <div
                className="favourite"
                onClick={favouriteHandler.bind(null, item)}
              >
                <FaHeart className="liked" />
              </div>
              <img src={item.Poster} alt={item.Title} />
            </div>
          );
        })}
      </section>
    );
  } else if (favourites !== null && favourites.length === 0) {
    return (
      <section className="favouriteMoviesListSec">
        <div className="errorMessage">
          As of now you do not have any favourite item.
        </div>
      </section>
    );
  } else {
    return (
      <section className="favouriteMoviesListSec">
        <Loading />
      </section>
    );
  }
}

export default Favourite;
