
import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup";
import VehicleManagement from "../components/VehicleManagement";
import VehicleOwners from "../components/VehicleOwners";
import Main from "../layout/Main";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path:"/",
            element:<Home/>
        },
        {
          path: "/menu",
          element: <Dashboard/>,
        }
      ]
    },
    {
      path: "/signup",
      element :<Signup/>
    },
    {
      path: "/order",
      element :<VehicleManagement/>
    },
    {
      path: "/vehicle-owner",
      element :<VehicleOwners/>
    }
  ]);

export default router;