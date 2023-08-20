import { BsFillStarFill } from "react-icons/bs";
import Razorpay from "./Razorpay";

export default function MovieHero() {
  return (
    <>
      <div className="block sm:hidden">
        {/* Small only */}
        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mission-impossible-dead-reckoning--part-one-et00329481-1688284554.jpg"
          alt="Poster"
        />
      </div>
      <div className="hidden md:block lg:hidden">
        {/* Medium Screen */}
        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mission-impossible-dead-reckoning--part-one-et00329481-1688284554.jpg"
          alt="Poster"
        />
      </div>
      <div className="hidden lg:block relative" style={{ height: "40rem" }}>
        {/* Big Screen */}
        <div
          className="absolute h-full w-full z-10 gradient-overlay"
          style={{
            backgroundImage: `linear-gradient(
        90deg,
        rgb(26, 26, 26) 24.97%,
        rgb(26, 26, 26) 38.3%,
        rgba(26, 26, 26, 0.04) 97.47%,
        rgb(26, 26, 26) 100%
      )`,
          }}
        />
        {/* Container for Star Icon and Movie Details */}
        <div className="absolute z-20 flex gap-4 items-center">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA5MC4xSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-bcufavugyg-portrait.jpg"
            alt="Poster"
            className=" w-96 rounded-xl"
          />
          <div className="text-white flex flex-col gap-5">
            <div>
              <h1 className="text-5xl font-semibold">
                Mission Impossible:
                <br /> Dead Reckoning - Part One
              </h1>
            </div>
            <div className="flex gap-2 items-center font-bold text-3xl">
              <BsFillStarFill />
              9.1/10
              <div className=" font-bold text-lg">90.3K Votes</div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="my-2 bg-gray-900 bg-opacity-75 border border-gray-600 rounded-md p-3 w-96 text-white">
                  <h1 className="font-bold text-xl">
                    Add your rating & review
                  </h1>
                  <p className="mb-4 font-bold text-gray-300">
                    Your ratings matter
                  </p>
                </div>
                <div>
                  <button
                    className="bg-green-500 text-black rounded-lg font-bold w-40 h-12 hover:text-white"
                    href="#"
                  >
                    Rate Now
                  </button>
                </div>
              </div>

              <div class="mb-4 bg-slate-200 text-black max-w-1/2 rounded">
                <p>2D, ICE, MX4D, 4DX, IMAX 2D, 2D SCREEN</p>
              </div>

              <div class="mb-4 bg-slate-200 text-black inline-block max-w-1/2 rounded">
                English , Hindi , Tamil , Telugu
              </div>
              <p className="mb-4 font-bold">
                2h 45m • Action , Adventure , Thriller • UA • 12 Jul, 2023
              </p>
              <button
                onClick={Razorpay}
                className="bg-red-500 text-black font-bold rounded-full w-full py-2 hover:text-white"
              >
                Book Ticket
              </button>
            </div>
          </div>
        </div>

        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mission-impossible-dead-reckoning--part-one-et00329481-1688284554.jpg"
          alt="Poster"
          className="w-full"
          style={{ height: "40rem" }}
        />
      </div>
    </>
  );
}
