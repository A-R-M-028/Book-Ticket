import MovieCastPosterSlider from "../PosterSlider/MovieCastPosterSlider";
import Cast from "../Config/Cast";

export default function MovieCast() {
  return (
    <>
      <MovieCastPosterSlider images={Cast} title="Crew" />
    </>
  );
}
