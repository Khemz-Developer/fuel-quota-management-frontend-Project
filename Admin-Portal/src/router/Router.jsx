
import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup";
import StationOwners from "../components/StationOwners";
import VehicleManagement from "../components/VehicleManagement";
import Main from "../layout/Main";
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
      ]
    },
    {
      path: "/signup",
      element :<Signup/>
    },
    {
      path: "/accepted-orders",
      element :<StationOwners/>
    },
    {
      path: "/order",
      element :<VehicleManagement/>
    }
  ]);

export default router;