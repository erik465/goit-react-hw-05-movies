import React , {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSearchParams, useLocation } from 'react-router-dom'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common = {'Authorization': `bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQyNTU5ZTJiYWNiZGFmNDM5MTA5ZGUwNGJiZmZlYyIsInN1YiI6IjY0ZjQ1ZGM1OWU0NTg2MDExZGU2OTAyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-wH1Q4duwruYZ20I3KeAqsuiKf4R39syfbHVwVM9DM`}


const Movies = () => {
    const [movies, setMovies] = useState([])

    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();

    const searchMovie = async(query) =>{
    const res = await axios.get(`search/movie?query=${query}`)
    return (res.data.results)
  }

  useEffect(()=>{
    if(searchParams.get('query')){
      searchMovie(searchParams.get('query'))
        .then(res => {
            setMovies(res)
        })
    }
  }, [searchParams])

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        setSearchParams({query : e.target.firstChild.value})
    }}>
        <input type='text' placeholder='Search Movie...' value={searchParams.get('query') ? searchParams.get('query') : ''}/>
        <input type="submit" value='Search'/>
      </form>
      <ul>
          {movies.length !== 0 ? movies.map(movie => {
            return (
            <Link key={movie.id} to={`/movies/${movie.id}`} state={{from : location.pathname + location.search}}>
            <li >
                <p>{movie.title}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` }alt='movie' />
            </li>
            </Link>
            )
          }) :  <p>No movies found!</p>}
        </ul>
    </div>
  )
}

export default Movies
