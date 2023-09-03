import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import styled from 'styled-components'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common = {'Authorization': `bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQyNTU5ZTJiYWNiZGFmNDM5MTA5ZGUwNGJiZmZlYyIsInN1YiI6IjY0ZjQ1ZGM1OWU0NTg2MDExZGU2OTAyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-wH1Q4duwruYZ20I3KeAqsuiKf4R39syfbHVwVM9DM`}

const StyledCastList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-content: center;
  flex-wrap: wrap;
`
const StyledCastMember = styled.li`
  display: flex;
  flex-direction: column;
  
`

const Cast = () => {
  const {movieId} = useParams()
  const [content, setContent] = useState([])
   async function fetchCast(){
    const res = await axios.get(`/movie/${movieId}/credits`)
    console.log(res.data.cast)
    return res.data.cast
  }
  useEffect(()=>{
    fetchCast()
    .then(res => setContent(res))
  }, [])
  return (
    <div>
      <h2>Cast</h2>
      <StyledCastList>
      {content.map(actor => {
        return(
        <StyledCastMember key={actor.credit_id}>
          <b>{actor.character}</b>
          <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt='actor image'/>
          <p>{actor.original_name}</p>
        </StyledCastMember>)
      })}
      </StyledCastList>
    </div>
  )
}

export default Cast
