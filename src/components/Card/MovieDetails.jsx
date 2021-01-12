import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import Card from "./Card";

const MovieDetails = props => {
  const { movies } = props;
  const [movie, setMovie] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const { movieID } = useParams();

  let deneme = movieID;

  useEffect(async () => {
    const REACT_API_KEY = await `15e58f1aa8b28e62ed3a9f7bb13f9fd3`;
    const axios = await require("axios").default;

    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=${REACT_API_KEY}`
      )
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => console.log(error));

    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${REACT_API_KEY}`
      )
      .then(response => {
        setRecommendations(response.data.results);
      })
      .catch(error => console.log(error));
  }, [movie]);

  return (
    <div className="container">
      <nav className="pt-5" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {movie.title}
          </li>
        </ol>
      </nav>
      <div className="col-sm-8 offset-sm-2 py-3">
        <div className="d-flex flex-wrap justify-content-center">
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            className="img-fluid rounded mb-5"
            alt="..."
          />
          <div className="ms-md-5">
            <h1>{movie.title}</h1>
            <p>
              <strong>Release Data:</strong> {" " + movie.release_date}
            </p>
            <hr />
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <p>
              <strong>Users Vote:</strong>
              <span className="ms-2 rounded-circle border border-danger p-2">
                {"   " + movie.vote_average}
              </span>
            </p>
          </div>
        </div>
        <hr />
        <h2 className="mb-3">Recommendations</h2>
        <div className="row">
          {recommendations
            ? recommendations.map(item => {
                return (
                  <Card sm={12} md={6} lg={4} key={item.id} movies={item} />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
