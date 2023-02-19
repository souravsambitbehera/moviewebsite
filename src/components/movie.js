import React from 'react'
import { UseGlobalContext } from './context'


const Movie = () => {
    const {movie} = UseGlobalContext()
  return (
    <div>
        {
            movie.map((curMovie)=>
                <div key={curMovie.Title}>
                    <h2>{curMovie.Title}</h2>
                </div>
             
            )
        }
    </div>
  )
}

export default Movie