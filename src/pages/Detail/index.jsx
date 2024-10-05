import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../utils/api";
import Banner from "./Banner";
import Categories from "./Categories";
import About from "./About";
import Cast from "./Cast";
import { BsChevronLeft } from "react-icons/bs";
import Button from "../../components/Button";
import Trailers from "./Trailers";

const Detail = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "credits,videos",
      language: "en",
    };

    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[30%_auto] gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Link
              to={".."}
              className="flex items-center gap-1 font-medium bg-gray-500 py-1 px-2 text-lg rounded"
            >
              <BsChevronLeft className="size-6" /> Back
            </Link>
            <Button movie={movie} />
          </div>
          <Banner movie={movie} />
        </div>

        <div className="w-full md:w-[65vw]">
          <Categories movie={movie} />

          <About movie={movie} />

          <Cast cast={movie?.credits?.cast} />
        </div>
      </div>

      <Trailers trailers={movie.videos?.results} />
    </>
  );
};

export default Detail;
