import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import ErrorComponents from "./components/ErrorComponents";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

const router = createBrowserRouter([
  {
    // Container for all Routes
    path:"/",
    element: <App />,
    children: [
      {
        path:"",
        element: <Home/>,
        errorElement: <ErrorComponents/>
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "users/:userId",
        element: <User/>,
        children: [
          {
            path: "followers",
            element: <Followers/>
          }
        ]
      }
    ],
    errorElement: <NotFound/>,
  },
])

export default router;
