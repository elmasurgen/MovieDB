import React, { useState, useEffect } from "react";


import Card from "../components/Card/Card";


const PopularMovies = props => {
  const [popular, setPopular] = useState([]);

  useEffect(async () => {
    const REACT_API_KEY = await `15e58f1aa8b28e62ed3a9f7bb13f9fd3`;

    const axios = await require("axios").default;
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_API_KEY}`
      )
      .then(response => {
        setPopular(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="row">

              {popular
                ? popular.map(item => {
                    return (
                      <Card sm={6} md={4} lg={3} key={item.id} movies={item} />
                    );
                  })
                : null}

      </div>
    </div>
  );
};

export default PopularMovies;
