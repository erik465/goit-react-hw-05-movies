import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import {StyledCastList, StyledCastMember} from './Cast.styled'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common = {'Authorization': `bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQyNTU5ZTJiYWNiZGFmNDM5MTA5ZGUwNGJiZmZlYyIsInN1YiI6IjY0ZjQ1ZGM1OWU0NTg2MDExZGU2OTAyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-wH1Q4duwruYZ20I3KeAqsuiKf4R39syfbHVwVM9DM`}



const Cast = () => {
  const {movieId} = useParams()
  const [content, setContent] = useState([])
   

  useEffect(()=>{

     const fetchCast = async() =>{
      const res = await axios.get(`/movie/${movieId}/credits`)
      return res.data.cast
    }

    fetchCast().then(res => setContent(res))
  }, [movieId])


  return (
    <div>
      <h2>Cast</h2>
      <StyledCastList>
      {content.map(actor => {
        return(
        <StyledCastMember key={actor.credit_id}>
          <b>{actor.character}</b>
          <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt='actor '/>
          <p>{actor.original_name}</p>
        </StyledCastMember>)
      })}
      </StyledCastList>
    </div>
  )
}

export default Cast
