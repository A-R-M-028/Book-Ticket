import Poster from "../Poster/Poster";
import settings from "../Config/PosterCarousal";
import Slider from "react-slick";

const PosterSlider = (props) => {
  return (
    // { ...image} -> This is for 1 image and its property to Poster
    <>
      {/* From Slick documentation */}
      <div
        className={`${
          props.isDark ? "text-white" : "text-gray-800"
        } flex flex-col items-start py-8 px-4`}
      >
        <h3 className="text-xl font-bold">{props.title}</h3>
        <p className="text-sm">{props.subtitle}</p>
      </div>
      <Slider {...settings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} /> // By default is True -> bool
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
