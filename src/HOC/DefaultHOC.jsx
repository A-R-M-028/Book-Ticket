import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

const DefaultHOC = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      element={
        <DefaultLayout>
          <Component {...props}/>
        </DefaultLayout>
      }
    />
  );
};

export default DefaultHOC;
