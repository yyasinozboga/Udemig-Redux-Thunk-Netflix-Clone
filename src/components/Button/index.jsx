import { MdBookmarkAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMovie } from "../../redux/actions/movieActions";
import { MdBookmarkRemove } from "react-icons/md";
import React, { useState } from "react";

const index = ({ movie, icon }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const { movies } = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  const found = movies.find((item) => item.id === movie.id);

  const handleClick = () => {
    dispatch(toggleMovie(movie, !found, setIsLoading, setText));
  };

  if (icon) {
    return (
      <button className="absolute top-1 end-1" onClick={handleClick}>
        {found ? (
          <MdBookmarkRemove className="size-8 text-red-500" />
        ) : (
          <MdBookmarkAdd className="size-8 text-blue-500" />
        )}
      </button>
    );
  }

  return (
    <button
      className={`flex justify-center items-center gap-2 font-medium py-1 px-3 text-lg rounded-sm w-[255px] ${
        found ? "bg-red-500" : "bg-blue-500"
      }`}
      onClick={handleClick}
    >
      {isLoading ? (
        <span>{text}</span>
      ) : found ? (
        <>
          <MdBookmarkRemove className="size-5" />
          <span>Remove from watchlist</span>
        </>
      ) : (
        <>
          <MdBookmarkAdd className="size-5" />
          <span>Add to watchlist</span>
        </>
      )}
    </button>
  );
};

export default React.memo(index);
