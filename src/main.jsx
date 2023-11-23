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
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
       index:true,
        element: <Home></Home>
      },
      {
       path:"create_survey" ,
        element: <CreateSurvey></CreateSurvey>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
