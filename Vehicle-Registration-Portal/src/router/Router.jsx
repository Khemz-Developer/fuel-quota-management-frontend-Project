import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup";
import Main from "../layout/Main";
import DashBoard from "../pages/DashBoard";
import Help from "../pages/Help";
import Home from "../pages/Home";
import RegistrationPage from "../pages/RegistrationPage";
import UpdateProfile from "../pages/UpdatedProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path:"/update-profile",
        element:<UpdateProfile/>
      },
      {
        path:"/help",
        element:<Help/>
      }
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
