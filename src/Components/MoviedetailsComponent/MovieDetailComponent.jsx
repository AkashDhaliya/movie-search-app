import React, { useEffect, useState } from "react";
import Modal from "../ModalComponent/Modal";
import Requests from "../RequestComponent/Requests";
import { API_KEY } from "../../Constants/Const";
import Loading from "../LoadingSpinnerComponent/LoadingSpinner";

function MovieDetailComponent(props) {
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieSummary, setMovieSummary] = useState("");
  const [isResponse, setIsResponse] = useState(false);
  const [isError, setIError] = useState(false);

  useEffect(() => {
    let params = {
      apikey: API_KEY,
      i: props.id,
      plot: "full",
    };
    getSearchData(params);
  }, [props.id]);

  function getSearchData(params) {
    Requests(params).then(
      (response) => {
        let keys = Object.keys(response.data);
        let data = [];
        let ratings;
        keys.forEach((item) => {
          if (item !== "Poster" && item !== "imdbID" && item !== "Plot" && item !== "Ratings") {
            data.push({ key: item, val: response.data[item] });
          } else if (item === "Ratings") {
            ratings = { key: item, val: response.data[item] };
          } else if (item === "Plot") {
            setMovieSummary(response.data[item]);
          }
        });
        data.push(ratings);
        setMovieDetail(data);
        setIsResponse(true);
        setIError(false);
      },
      (error) => {
        setIsResponse(true);
        setIError(true);
      }
    );
  }

  if (isResponse && !isError) {
    return (
      <>
        <div className="movieSummary">
          <span className="movieSummaryLabel">Summary</span>
          <span>:</span>
          <span className="movieDetailLableVal">{movieSummary}</span>
        </div>
        <div className="moviedetailSec">
          <div className="movieDetailImg">
            <img src={props.posterurl} alt="Movie Name" />
          </div>
          <ul>
            {movieDetail.map((item) => {
              if (item.key === "Ratings") {
                return (
                  <li className="ratingListItem" key={item.key}>
                    <span className="movieDetailLable">{item.key}</span>
                    <span>:</span>
                    <span className="movieDetailLableVal">
                      {item.val.map((rating) => {
                        return (
                          <span className="customeTags" key={rating.Source}>
                            {rating.Source}&nbsp;:&nbsp;{rating.Value}
                          </span>
                        );
                      })}
                    </span>
                  </li>
                );
              } else {
                return (
                  <li key={item.key}>
                    <span className="movieDetailLable">{item.key}</span>
                    <span>:</span>
                    <span className="movieDetailLableVal">{item.val}</span>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </>
    );
  } else if (isResponse && isError) {
    return <div className="moviedetailSec">Oops something went wrong.</div>;
  } else {
    return (
      <div className="moviedetailSec">
        <Loading />
      </div>
    );
  }
}

export default Modal(MovieDetailComponent);
