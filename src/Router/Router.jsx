import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout> ,
    children:[
      {
        index:true,
        element:<Home></Home>
      }
    ]
  },
]);
export default router