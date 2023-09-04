import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header"
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

const Home = lazy(() => import("./Home/Home"));
const Movies = lazy(() => import("./Movies/Movies"));
const Movie = lazy(() => import("./Movie/Movie"));


export const App = () => {
  return (
    <> 
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/movies/:movieId/' element={<Movie />}>
          <Route path='cast' element={<Cast />}></Route>
          <Route path='reviews' element={<Reviews />}></Route>
        </Route>
      </Routes>
      </Suspense>
    </>
  );
};
