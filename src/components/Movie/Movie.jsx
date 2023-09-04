import React, {useState, useEffect} from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

import { StyledContainer, MovieInfo } from './Movie.styled'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common = {'Authorization': `bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQyNTU5ZTJiYWNiZGFmNDM5MTA5ZGUwNGJiZmZlYyIsInN1YiI6IjY0ZjQ1ZGM1OWU0NTg2MDExZGU2OTAyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-wH1Q4duwruYZ20I3KeAqsuiKf4R39syfbHVwVM9DM`}

const Movie = () => {
  const {movieId} = useParams()
  const [currentMovie, setCurrentMovie] = useState({})
  const location = useLocation();
  
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {

    const getMovieDetails = async () => {
      const res = await axios.get(`movie/${movieId}`)
      console.log(res.data)
      return res.data
    }

    getMovieDetails().then(res => {setCurrentMovie(res)})
  },[movieId])

  return (
    <div>
        <Link to={backLinkHref}> {'<-'} Go Back</Link>
        <StyledContainer>
            <img src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`} alt='movie '/>
            <MovieInfo>
                <h2>{currentMovie.title}</h2>
                <p>{currentMovie.overview}</p>
                <p>Time: {currentMovie.runtime} mins.</p>
                <p>Release date: {currentMovie.release_date}</p>
                <p>Budget : {currentMovie.budget}$</p>
                <Link to={`/movies/${currentMovie.id}/cast`}>Cast</Link>
                <Link to={`/movies/${currentMovie.id}/reviews`}>Reviews</Link>
            </MovieInfo>
        </StyledContainer>
        
        <Outlet />
    </div>
  )
}

export default Movie
