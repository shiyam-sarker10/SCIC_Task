import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const query = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  

  <QueryClientProvider client={query}>
     <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </QueryClientProvider>
);
