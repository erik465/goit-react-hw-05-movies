import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common = {'Authorization': `bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQyNTU5ZTJiYWNiZGFmNDM5MTA5ZGUwNGJiZmZlYyIsInN1YiI6IjY0ZjQ1ZGM1OWU0NTg2MDExZGU2OTAyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-wH1Q4duwruYZ20I3KeAqsuiKf4R39syfbHVwVM9DM`}


const Reviews = () => {
  const {movieId} = useParams()
  const [content, setContent] = useState([])

  

  useEffect(()=>{

     const fetchReviews =  async() => {
      const res = await axios.get(`/movie/${movieId}/reviews`)
      console.log(res.data.results)
      return res.data.results
    }

    fetchReviews().then(res => setContent(res))
  }, [])


  return (
    <div>
      <h2>Reviews</h2>
      {content.length !== 0 ? content.map(review => {
        return (
        <div key={review.id}>
          <b>{review.author}</b>
          <p>{review.content}</p>
        </div>)
      }) : <b>No reviews</b> }
    </div>
  )
}

export default Reviews
