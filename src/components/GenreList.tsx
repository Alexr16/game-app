import useGenrers from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, loading } = useGenrers();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
