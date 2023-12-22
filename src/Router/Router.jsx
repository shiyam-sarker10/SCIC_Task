import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Register from './../pages/Register';
import Login from './../pages/Login';
import Dashboard from "../Layout/Dashboard/Dashboard";
import DashboardProfile from "../Layout/Dashboard/DashboardProfile";
import DashboardAddTask from './../Layout/Dashboard/DashboardAddTask';
import DashboardAllTask from './../Layout/Dashboard/DashboardAllTask';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
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
        element: <h1>Hello</h1>,
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
    ],
  },
]);
export default router