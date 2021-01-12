import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link ,Redirect } from "react-router-dom";

import Search from "./Search/Search";
import PopularMovies from "../Pages/PopularMovies";
import Http404 from "./Http404"
import MovieDetails from "../components/Card/MovieDetails";
import Header from "./Header/Header";

const AppContainer = () => {
  return (
    <>
      <Router>
    <Header />
    <main>
        <Switch>
          <Route path="/popular/:movieID">
            <MovieDetails />
          </Route>
          <Route path="/popular">
            <PopularMovies />
          </Route>
          <Route exact path="/">
            <Search />
          </Route>
           <Route path="/404">
              <Http404 />
            </Route>
            <Redirect from="*" to="/404" />
        </Switch>
    </main>
      </Router>
    </>
  );
};

export default AppContainer;
