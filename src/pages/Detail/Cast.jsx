import { Splide, SplideSlide } from "@splidejs/react-splide";
import { baseImgUrl } from "../../utils/constants";

const Cast = ({ cast }) => {
  return (
    <Splide
      options={{ autoWidth: true, gap: "10px", pagination: false }}
      className="mt-3 w-full"
    >
      {cast?.map((actor) => (
        <SplideSlide key={actor.id}>
          <div className="h-[200px] w-[150px]">
            {actor.profile_path ? (
              <img
                src={baseImgUrl + actor.profile_path}
                className="rounded size-full object-cover"
              />
            ) : (
              <img
                src="/assets/default.webp"
                className="rounded size-full object-cover"
              />
            )}
          </div>
          <span className="font-medium">{actor.name}</span>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Cast;
