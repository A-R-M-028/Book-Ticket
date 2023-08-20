// // Import
// import Slider from "react-slick";
// // Component
// import Poster from "../components/Poster/Poster";
// // Import from config -> Settings
// import settings from "../components/Config/PosterCarousal";
// // Import from config -> Dataset
// import PremierImages from "../components/Config/PosterTemp";

// export const Premier = () => {
//   // Setting moved to config

//   // Premiere Images moved to config

//   return (
//     // { ...image} -> This is for 1 iamge and it's property to Poster
//     <>
//       {/* From Slick documentation */}
//       <div className="flex flex-col items-start py-8 px-4">
//         <h3 className="text-white text-xl font-bold">Premiere</h3>
//         <p className="text-white text-sm"> Brand new release every friday</p>
//       </div>
//       <Slider {...settings}>
//         {PremierImages.map((image) => (
//           <Poster {...image} isDark={true} />
//         ))}
//       </Slider>
//     </>
//   );
// };
