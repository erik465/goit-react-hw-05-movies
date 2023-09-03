import React, {useState, useEffect, Suspense} from 'react'
import axios from 'axios'
import { StyledHome } from './Home.styled'

import { Link } from 'react-router-dom'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common = {'Authorization': `bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQyNTU5ZTJiYWNiZGFmNDM5MTA5ZGUwNGJiZmZlYyIsInN1YiI6IjY0ZjQ1ZGM1OWU0NTg2MDExZGU2OTAyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-wH1Q4duwruYZ20I3KeAqsuiKf4R39syfbHVwVM9DM`}

const Home = () => {
  const [movies, setMovies] = useState([])

  const fetchTrending = async () => {
    const res =  await axios.get(`/trending/movie/day?api-key=3942559e2bacbdaf439109de04`)
    const data = await res.data
    return data.results
  }

  useEffect(() => {
    fetchTrending().then(res => setMovies(res))
  }, [])

  return (
    <StyledHome>
      <h3>Trending Movies</h3>
      <Suspense>
        <ul>
          {movies !== null ? movies.map(movie => {
            return (
            <Link key={movie.id} to={`/movies/${movie.id}`}>  
            <li >
                <p>{movie.title}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie image' />
            </li>
            </Link>
            )
          }) : <p>No movies found</p>}
        </ul>
      </Suspense>
    </StyledHome>
  )
}

export default Home
