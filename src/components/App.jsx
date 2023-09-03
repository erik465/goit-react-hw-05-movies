import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header"
import Movies from "./Movies/Movies";
import Movie from "./Movie/Movie";
import Cast from "./Movie/Cast";
import Reviews from "./Movie/Reviews";

export const App = () => {
  return (
    <> 
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/movies/:movieId/' element={<Movie />}>
          <Route path='cast' element={<Cast />}></Route>
          <Route path='reviews' element={<Reviews />}></Route>
        </Route>
      </Routes>
    </>
  );
};
