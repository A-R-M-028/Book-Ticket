import { Route } from "react-router-dom";
import MovieLayout from "../layouts/MovieLayout";

const MovieHOC = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      element={
        <MovieLayout>
          <Component {...props} />
        </MovieLayout>
      }
    />
  );
};

export default MovieHOC;
