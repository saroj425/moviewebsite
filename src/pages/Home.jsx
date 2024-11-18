import React, { useEffect, useState } from 'react'
import Moviecard from '../components/Moviecard'
import axios from 'axios';

const Home = () => {
    const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/titles/x/upcoming?page=1`, {
        headers: {
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        },
      });
      setMovies(response.data.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log("moviesmoviesmoviesmovies",movies);
  return (
    <>
        <h1 style={{ marginBottom: "20px" }}>Upcoming Movies</h1>
        <div className="maindiv">
            {movies &&
            movies.map((movie, index) => (
                <Moviecard key={index} movie={movie} />
            ))}
        </div>
    </>
    
  )
}

export default Home