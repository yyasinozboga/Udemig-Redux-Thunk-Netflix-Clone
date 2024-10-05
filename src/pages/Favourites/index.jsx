import { useSelector } from "react-redux";
import { baseImgUrl } from "../../utils/constants";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Button from "../../components/Button";

const Favourites = () => {
  const { movies, isLoading, error } = useSelector((store) => store.movies);

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <>
      {movies.length === 0 ? (
        <h1 className="text-white text-7xl font-medium text-center">
          Your watchlist is empty
        </h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {movies.map((movie) => (
            <div key={movie.id} className="relative">
              <Link to={`/movie/${movie.id}`}>
                <div>
                  <img
                    src={baseImgUrl + movie.backdrop_path}
                    className="rounded-md opacity-70 transition-all duration-3000 hover:opacity-100 hover:cursor-pointer"
                  />
                </div>
              </Link>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl whitespace-nowrap">
                {movie.title}
              </span>
              <Button icon movie={movie} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Favourites;
