import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Signup from "../components/Signup";
import DashBoard from "../pages/DashBoard";
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
        path: "update-profile",
        element: <UpdateProfile/>,
      }
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
