import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import PopularMovies from "../../Pages/PopularMovies";
import "./s-search.css";
const Search = props => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const REACT_API_KEY = `15e58f1aa8b28e62ed3a9f7bb13f9fd3`;

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
    fetch(URL)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, [query]);

  return (
    <div className="container">
      <form  onSubmit={event =>event.preventDefault()} className="row">
        <div className="col-sm-8 offset-sm-2">
          <div className="row g-3 justify-content-center pt-3">
            <div className="col-auto">
              <div className="search-area">
                <label htmlFor="inputSearch" className="visually-hidden">
                  Search
                </label>
                <input
                  name="query"
                  onChange={event => setQuery(event.target.value)}
                  type="text"
                  className="form-control mb-5"
                  id="inputSearch"
                  placeholder="Search"
                />
                <i className="fas fa-search" />
              </div>
            </div>
          </div>
          <div className="row">
            {movies ? (
              movies.map(item =>
                item.backdrop_path ? (
                  <Card sm={6} md={6} lg={4} key={item.id} movies={item} />
                ) : null
              )
            ) : (
              <PopularMovies />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
