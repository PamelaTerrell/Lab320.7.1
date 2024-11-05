import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";



export default function App() {
  const apiKey = "98e3fb1f"; 

  
  const [movie, setMovie] = useState(null);

  
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);  // Set the movie state with the data from the API
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  // Fetch a default movie when the component mounts
  useEffect(() => {
    getMovie("Clueless");
  }, []); 

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
