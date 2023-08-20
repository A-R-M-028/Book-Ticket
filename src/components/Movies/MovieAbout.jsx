import { BiCameraMovie } from "react-icons/bi";

const  MovieAbout = () => {
  return (
    <>
      <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            In Mission: Impossible - Dead Reckoning Part One, Ethan Hunt (Tom
            Cruise) and his IMF team embark on their most dangerous mission yet:
            To track down a terrifying new weapon that threatens all of humanity
            before it falls into the wrong hands. With control of the future and
            the fate of the world at stake, and dark forces from Ethan`s past
            closing in, a deadly race around the globe begins. Confronted by a
            mysterious, all-powerful enemy, Ethan is forced to consider that
            nothing can matter more than his mission - not even the lives of
            those he cares about most.
          </p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div>
          <h1 className="text-gray-800 font-bold text-2xl py-3">
            Applicable Offers
          </h1>
          {/* Yellow Offers cell */}
          <div className="my-2 flex items-start gap-2 bg-yellow-200 border-yellow-300 border-dashed border-2 rounded-md p-3 w-96">
            <div className="h-8 w-8">
              <BiCameraMovie className="w-full h-full" />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
              <p className="text-gray-600 text-sm">
                Get Rs. 75 off on 3 movies you buy/rent on sream. buy Filmy pass
                @Rs. 99
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieAbout;