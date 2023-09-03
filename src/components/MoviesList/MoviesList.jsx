import React from 'react'

const MoviesList = ({movies}) => {
  return (
    <ul>
      {movies.map(movie => {
        return (<li></li>)
      })}
    </ul>
  )
}

export default MoviesList
