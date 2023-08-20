import Poster from "../components/Poster/Poster";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters";

export default function Plays() {
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className=" lg:w-8/12">
            <h2 className="text-2xl font-bold mb-4">Plays in Kolkata</h2>
            <div className="flex flex-wrap">
              {/* Poster */}
              <div className="w-1/2 md:w-1/3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364921-lduygquyxg-portrait.jpg"
                  title="Kucch Bhi Ho Sakta Hai with Anupam Kher"
                  subtitle="Drama | Hindi | 5yrs + | 2hrs 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364921-lduygquyxg-portrait.jpg"
                  title="Kucch Bhi Ho Sakta Hai with Anupam Kher"
                  subtitle="Drama | Hindi | 5yrs + | 2hrs 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364921-lduygquyxg-portrait.jpg"
                  title="Kucch Bhi Ho Sakta Hai with Anupam Kher"
                  subtitle="Drama | Hindi | 5yrs + | 2hrs 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364921-lduygquyxg-portrait.jpg"
                  title="Kucch Bhi Ho Sakta Hai with Anupam Kher"
                  subtitle="Drama | Hindi | 5yrs + | 2hrs 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364921-lduygquyxg-portrait.jpg"
                  title="Kucch Bhi Ho Sakta Hai with Anupam Kher"
                  subtitle="Drama | Hindi | 5yrs + | 2hrs 30mins"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 mx-6">
            {/* Filter -> LG*/}
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilter
                title="Language"
                tags={["Bengali", "Hindi", "Hindustani"]}
              />
              <PlaysFilter title="Categories" tags={["Theatre"]} />
              <PlaysFilter title="Genres" tags={["Drama"]} />
              <PlaysFilter
                title="More Filters"
                tags={["Outdoor Events", "Fast Filling"]}
              />
              <PlaysFilter
                title="Price"
                tags={["Free", "0 - 500", "501 - 2000", "Above 2000"]}
              />
            </div>
            <div className="w-full flex items-center mb-3 py-3 px-3">
              <button className="w-full block border border-red-600 bg-red-100 hover:bg-red-200 text-red-600 font-semibold py-2 px-4 rounded-lg">
                Browse By Venues
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
