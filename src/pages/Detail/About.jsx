import React from "react";

const About = ({ movie }) => {
  return (
    <div className="font-medium flex flex-col mt-3 gap-3">
      <p>{movie.overview}</p>
      <span>
        Budget: <span className="text-green-500">{movie.budget}$</span>
      </span>
      <span>
        Revenue: <span className="text-green-500">{movie.revenue}$</span>
      </span>
    </div>
  );
};

export default About;
