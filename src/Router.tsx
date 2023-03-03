import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import ErrorComponents from "./components/ErrorComponents";

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
      }
    ],
    errorElement: <NotFound/>,
  },
])

export default router;
