import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const prams = useParams("")
  return (
    <div>MovieDetails {prams.id}</div>
  )
}

export default MovieDetails