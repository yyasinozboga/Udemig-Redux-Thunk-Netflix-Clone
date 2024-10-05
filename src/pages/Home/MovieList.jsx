import { useState, useEffect } from "react";
import api from "../../utils/api";
import { baseImgUrl } from "../../utils/constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const params = {
      language: "en",
      with_genres: genre.id,
    };

    api
      .get("/discover/movie", { params })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-medium my-2">{genre.name}</h1>
      <Splide
        options={{
          pagination: false,
          autoWidth: true,
          gap: "20px",
        }}
      >
        {movies.map((movie, key) => (
          <SplideSlide key={key}>
            <div className="relative">
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="max-w-[300px] cursor-pointer rounded transition hover:scale-[1.01]"
                  src={baseImgUrl + movie.poster_path}
                />
              </Link>
              <Button movie={movie} icon />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
