import React from "react";
import {Link} from "react-router-dom"

const Card = props => {
  const {
    backdrop_path,
    overview,
    title,
    vote_average,
    release_date,
    id,
    poster_path
  } = props.movies;
  return (
    <div className={`col-sm-${props.sm} col-md-${props.md} col-lg-${props.lg}`}>
      <div className="card mx-auto mb-3" style={{ maxWidth: 18 + "rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{overview.slice(0, 100) + ".."}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/popular/${id}`} className="btn btn-primary">
              Details
            </Link>
            <span className="btn btn-danger">
              <strong>{vote_average}</strong>
            </span>
          </div>
          <small className="d-flex justify-content-center mt-3">
            <strong className="me-1">Release Date: </strong>{" "}
            <time className="text-secondary ms-1">{release_date}</time>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Card;
