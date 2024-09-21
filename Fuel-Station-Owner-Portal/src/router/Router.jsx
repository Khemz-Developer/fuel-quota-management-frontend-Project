
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Signup from "../components/Signup";


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
  ]);

export default router;