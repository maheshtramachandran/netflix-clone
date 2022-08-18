import React, { useEffect, useState } from "react";
import axios from "../../constants/axios.config";
import baseUrl from "../../constants/images.config";
import YouTube from "react-youtube";
import videoOptions from "../../constants/video.config";
import movieTrailer from "movie-trailer";
import "./Categories.css";

function Categories({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  // const [trailerUrl, setTrailerUrl] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      if (res?.data?.results) {
        setMovies(res.data.results);
      }
      return res;
    }
    fetchData();
  }, [fetchUrl]);

  const handleOnMovieClick = (movie) => {
    if (selectedMovie?.id && movie?.id && selectedMovie.id === movie.id) {
      setShowTrailer(!showTrailer);
    } else {
      movieTrailer(movie.name ?? movie.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          if (urlParams.get("v")) {
            setShowTrailer(true);
            setSelectedMovie({ ...movie, trailerUrl: urlParams.get("v") });
          }
        })
        .catch((err) => {
          console.log(err);
          setShowTrailer(false);
        });
    }
  };

  return (
    <div className="category">
      <h2>{title}</h2>
      <div className="category-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleOnMovieClick(movie)}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name ?? movie.title}
            className={`poster ${isLargeRow && "poster-large"}`}
          />
        ))}
      </div>
      {showTrailer && selectedMovie?.trailerUrl && (
        <YouTube videoId={selectedMovie?.trailerUrl} opts={videoOptions} />
      )}
    </div>
  );
}

export default Categories;
