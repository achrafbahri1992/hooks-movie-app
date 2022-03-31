import React, { useState } from 'react';
import './App.css';
import MovieList from './Component/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { moviesdata } from './Component/Data';



function App() {
  const [movies, setMovies] = useState(moviesdata)
  return (
    <div className="App" >
     <MovieList data={movies} />
    </div>
  );
}

export default App;
