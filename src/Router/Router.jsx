import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from './../pages/Register';
import Login from './../pages/Login';
import Dashboard from "../Layout/Dashboard/Dashboard";
import DashboardProfile from "../Layout/Dashboard/DashboardProfile";
import DashboardAddTask from './../Layout/Dashboard/DashboardAddTask';
import DashboardAllTask from './../Layout/Dashboard/DashboardAllTask';
import DashboardWelcome from './../Layout/Dashboard/DashboardWelcome';
import Pricing from './../pages/Pricing';
import DashboardTimer from "../Layout/Dashboard/DashboardTimer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "pricing",
        element: <Pricing></Pricing>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <DashboardWelcome></DashboardWelcome>,
      },
      {
        path: "profile",
        element: <DashboardProfile></DashboardProfile>,
      },
      {
        path: "add task",
        element: <DashboardAddTask></DashboardAddTask>,
      },
      {
        path: "all task",
        element: <DashboardAllTask></DashboardAllTask>,
      },
      {
        path: "timer",
        element: <DashboardTimer></DashboardTimer>,
      },
    ],
  },
]);
export default router