import { Link } from "react-router-dom";
import { IoBookmarks } from "react-icons/io5";

const Header = () => {
  return (
    <header className="mb-10 flex justify-between items-center">
      <Link to={"/"}>
        <img
          src="/assets/netflix_logo.svg"
          className="w-[150px] md:w-[200px]"
        />
      </Link>

      <Link
        to={"/watch-list"}
        className="flex items-center gap-2 font-medium text-lg hover:text-gray-300 transition"
      >
        <IoBookmarks className="size-5" />
        Watchlist
      </Link>
    </header>
  );
};

export default Header;
