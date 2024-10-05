import { baseImgUrl } from "../../utils/constants";

const Banner = ({ movie }) => {
  return (
    <div className="h-full relative drop-shadow-[0_0_80px_rgba(255,255,255,0.2)]">
      <img
        src={baseImgUrl + movie.backdrop_path}
        className="size-full object-cover rounded"
      />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-medium text-3xl">
        {movie.title}
      </h1>
    </div>
  );
};

export default Banner;
