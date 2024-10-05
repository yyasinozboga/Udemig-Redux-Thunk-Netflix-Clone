import Button from "../../components/Button";
import api from "../../utils/api";
import { useState, useEffect } from "react";
import { baseImgUrl } from "../../utils/constants";

const Hero = () => {
  const [movie, setMovie] = useState({});

  const getRandomMovie = (results) => {
    return results[parseInt(Math.random() * results.length)];
  };

  useEffect(() => {
    api
      .get("/movie/popular")
      .then((res) => setMovie(getRandomMovie(res.data.results)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-4xl font-medium">{movie.title}</h1>
        <p className="font-medium">{movie.overview}</p>
        <span className="text-gray-300 font-medium">
          IMDB:{" "}
          <span className="text-yellow-400">
            {movie.vote_average?.toFixed(2)}
          </span>
        </span>
        <div className="flex items-center gap-3">
          <button className="bg-red-500 rounded-sm py-1 px-3 font-medium text-lg">
            Filmi İzle
          </button>
          <Button movie={movie} />
        </div>
      </div>
      <div>
        <img
          src={baseImgUrl + movie.backdrop_path}
          className="drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] my-4 object-contain rounded max-h-[300px]"
        />
      </div>
    </div>
  );
};

export default Hero;
