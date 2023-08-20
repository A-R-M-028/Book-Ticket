const MovieCastPoster = (props) => {
  return (
    <>
      <div className="flex flex-col gap-3 px-2 items-center">
        <div className="h-50">
          <img src={props.src} className="w-full h-full rounded-full" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{props.title}</h3>
          <p className="text-sm">{props.subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCastPoster;
