import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import CreateSurvey from './components/CreateSurvey/CreateSurvey.jsx';
import Surveys from './components/Surveys/Surveys.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Details from './components/Details/Details.jsx';
import useAxiosSecure from './components/Hooks/useAxiosSecure.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Authprovider from './Authprovider/Authprovider.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Allusers from './components/Allusers/Allusers.jsx';
import AllSurveyinfo from './components/AllSurveyinfo/AllSurveyinfo.jsx';
const queryClient = new QueryClient()
const axiosSecure = useAxiosSecure()
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "create_survey",
        element: <CreateSurvey></CreateSurvey>
      },
      {
        path: "surveys",
        element: <Surveys></Surveys>
      },

      {
        path: "details/:id",
        element: <Details></Details>,
        loader: () => axiosSecure.get("/v1/allSurveys")
      },
      {
        path: "login",
        element: <Login></Login>

      },
      {
        path: "register",
        element: <Register></Register>

      },
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // admin
      {
        path: "allusers",
        element: <Allusers></Allusers>
      },
      {
        path: "allSurveyinfo",
        element: <AllSurveyinfo></AllSurveyinfo>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider><RouterProvider router={router} /></Authprovider>


    </QueryClientProvider>

  </React.StrictMode>,
)
