
import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup";
import StationOwners from "../components/StationOwners";
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
    }
  ]);

export default router;