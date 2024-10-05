import ReactPlayer from "react-player";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Trailers = ({ trailers }) => {
  return (
    <div className="mt-5 w-[93vw]">
      <h1 className="text-3xl font-medium mb-5">Trailers</h1>

      <Splide
        options={{ autoWidth: true, gap: "10px", pagination: false }}
        className="w-full"
      >
        {trailers?.slice(0, 3).map((trailer) => (
          <SplideSlide key={trailer.id}>
            <div className="rounded-md overflow-hidden w-full">
              <ReactPlayer
                controls
                url={`https://www.youtube.com/watch?v=${trailer.key}`}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Trailers;
