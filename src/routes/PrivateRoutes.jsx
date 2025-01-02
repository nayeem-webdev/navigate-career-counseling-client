import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <Loading />;
  } else if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/login"} />;
  }
};

export default PrivateRoutes;
