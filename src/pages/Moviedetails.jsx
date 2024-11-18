import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("ididididid",id, movie);
  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/titles/${id}`, {
        headers: {
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        },
      });
      setMovie(response.data.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);



  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{movie?.titleText?.text}</h1>
      <p> <strong>Release Date:</strong> {`${movie?.releaseDate?.day}-${movie?.releaseDate?.month}-${movie?.releaseDate?.year}`} </p>
      <p> <strong>Type:</strong> {movie?.titleType?.text} </p>
      <p> <strong>Description:</strong> {movie.plot?.text || "No description available."} </p>
      <img src={movie?.primaryImage?.url} alt={movie?.primaryImage?.caption?.plainText} style={{ maxWidth: "100%" }} />
    </div>
  );
};

export default MovieDetails;
