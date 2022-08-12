import React, { useEffect, useState } from "react";
import axios from "../constants/axios.config";
import baseUrl from "../constants/images.config";
import "./Categories.css";

function Categories({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  console.log("movies", movies);
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

  return (
    <div className="category">
      <h2>{title}</h2>
      <div className="category-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name ?? movie.title}
            className={`poster ${isLargeRow && "poster-large"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
