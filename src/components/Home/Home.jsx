import React, {useState, useEffect, Suspense} from 'react'
import axios from 'axios'
import MoviesList from 'components/MoviesList/MoviesList';

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers['X-API-KEY'] = '3942559e2bacbdaf439109de04bbffec';

const Home = () => {
  const [movies, getMovies] = useState([])
  useEffect(async () => {
    const res = await axios.get(`/trending/get-trending`)
    const data = await res.json()
    console.log(data)
  }, [])

  return (
    <div>
      <Suspense>
        <MoviesList />
      </Suspense>
    </div>
  )
}

export default Home
