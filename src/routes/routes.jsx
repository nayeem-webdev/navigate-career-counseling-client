import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ManageServices from "../pages/ManageServices";
import ServiceDetails from "../pages/ServiceDetails";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import ForgotPass from "../pages/ForgotPass";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/service/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/nayeem-webdev/fake-data-json/refs/heads/main/fake-career-service-json/fake-career-service.json"
          ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/manage-services",
        element: (
          <PrivateRoutes>
            <ManageServices />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-pass",
        element: <ForgotPass />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routes;
