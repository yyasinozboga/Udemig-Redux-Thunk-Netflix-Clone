import List from "./List";

const Categories = ({ movie }) => {
  return (
    <div>
      <List title="Categories" info={movie.genres} />
      <List title="Spoken Languages" info={movie.spoken_languages} />
      <List
        title="Production Companies
"
        info={movie.production_companies}
      />
      <List title="Production Countries" info={movie.production_countries} />
    </div>
  );
};

export default Categories;
