import MovieAbout from "../components/Movies/MovieAbout";
import MovieHero from "../components/Movies/MovieHero";
import MovieCast from "../components/Movies/MovieCast";
import MovieCrew from "../components/Movies/MovieCrew";


export default function () {

  return (
    <>
      <MovieHero />
      <MovieAbout/>
      <MovieCast/>
      <MovieCrew/>
    </>
  );
}
