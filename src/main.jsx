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
import useAxiospublic from './components/Hooks/useAxiospublic.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import PrivateAdmin from './components/PrivateRoute/PrivateAdmin.jsx';
import Allpayment from './components/Allpayment/Allpayment.jsx';
import PrivateSurveyor from './components/PrivateRoute/PrivateSurveyor.jsx';
import Update from './components/Update/Update.jsx';
import SurveysInfo from './components/SurveysInfo/SurveysInfo.jsx';
import Payment from './components/Payment/Payment.jsx';
import NovotePage from './components/NovotePage/NovotePage.jsx';
const queryClient = new QueryClient()
const axiospublic = useAxiospublic()
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "update/:id",
        element: <PrivateSurveyor><PrivateRoute><Update></Update></PrivateRoute></PrivateSurveyor>
      },
      {
        path: "surveys",
        element: <Surveys></Surveys>
      },

      {
        path: "details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute> ,
        loader: () => axiospublic.get("/v1/allSurveys")
      },
      {
        path: "login",
        element: <Login></Login>

      },
      {
        path: "register",
        element: <Register></Register>

      },
      {
        path: "payment",
        element: <Payment></Payment>

      },
      {
        path: "novote",
        element: <NovotePage></NovotePage>

      },
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // admin
      {
        path: "allusers",
        element: <PrivateAdmin><PrivateRoute><Allusers></Allusers></PrivateRoute></PrivateAdmin>
      },
      {
        path: "allSurveyinfo",
        element: <PrivateRoute> <AllSurveyinfo></AllSurveyinfo></PrivateRoute>
      },
      {
        path: "allPayment",
        element: <PrivateRoute> <Allpayment></Allpayment> </PrivateRoute>
      },

      // for surveyor
      {
        path: "create_survey",
        element: <PrivateSurveyor><PrivateRoute> <CreateSurvey></CreateSurvey></PrivateRoute></PrivateSurveyor>
      },
      {
        path: "surveysinfo",
        element: <PrivateSurveyor><PrivateRoute>  <SurveysInfo></SurveysInfo> </PrivateRoute></PrivateSurveyor>
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
