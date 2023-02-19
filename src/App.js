import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ErrorPath from './components/error'
import MovieDetails from './components/movie.details'
import Home from './components/home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<ErrorPath/>} />
          <Route path="movie/:id" element={<MovieDetails/>} />

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App