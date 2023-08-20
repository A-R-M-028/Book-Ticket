import MovieCastPoster from "../Poster/MovieCastPoster";
import settings from "../Config/PosterCarousalCast";
import Slider from "react-slick";

const MovieCastPosterSlider = (props) => {
  return (
    <>
      <div>
        <h3 className="text-xl font-bold">{props.title}</h3>
      </div>
      <Slider {...settings}>
        {props.images.map((image) => (
          <MovieCastPoster {...image} />
        ))}
      </Slider>
    </>
  );
};

export default MovieCastPosterSlider;
