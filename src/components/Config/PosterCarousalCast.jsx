const settings = {
  infinite: true, // Set to true to enable continuous loop
  autoplay: true,
  autoplaySpeed: 5000, // Set a higher value for a slower speed (e.g., 5000 milliseconds = 5 seconds)
  slidesToShow: 5,
  slidesToScroll: 2,
  initialSlide: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default settings;
