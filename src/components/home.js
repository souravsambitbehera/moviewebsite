import Movie from "./movie"
import MovieSearch from "./movie.search"

const Home = () => {

  // use useContext Here
  return (
    <>
    <div className="container">
    <MovieSearch />
    <Movie/>
    </div>
    </>
  )
}

export default Home