import React, { useEffect, useState } from "react";
import Modal from "../ModalComponent/Modal";
import Requests from "../RequestComponent/Requests";
import { API_KEY } from "../../Constants/Const";
import Loading from "../LoadingSpinnerComponent/LoadingSpinner";

function MovieDetailComponent(props) {
  const [movieDetail, setMovieDetail] = useState([]);
  const [isResponse, setIsResponse] = useState(false);
  const [isError, setIError] = useState(false);

  useEffect(() => {
    let params = {
      apikey: API_KEY,
      i: props.id,
      plot: "full",
    };
    getSearchData(params);
  }, []);

  function getSearchData(params) {
    Requests(params).then(
      (response) => {
        let keys = Object.keys(response.data);
        let data = [];
        keys.forEach((item) => {
          data.push({ key: item, val: response.data[item] });
        });
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
      <div className="moviedetailSec">
        <div>
          <div className="movieDetailImg">
            <img src={props.posterurl} alt="Movie Name" />
          </div>
        </div>
        <ul>
          {movieDetail.map((item) => {
            if (
              item.key !== "Ratings" &&
              item.key !== "Poster" &&
              item.key !== "imdbID" &&
              item.key !== "Plot"
            ) {
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
