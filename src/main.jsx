import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Main from './layouts/Main'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './Components/Login/Login.jsx';
import Home from './Components/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
    },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
