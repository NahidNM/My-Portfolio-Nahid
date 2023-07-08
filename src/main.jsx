import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main.jsx';
import Home from './components/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
    {
      path: "/",
      element: <Home/>
    }
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='mx-auto max-w-7xl'>
  <RouterProvider router={router} />
  </div>
  </React.StrictMode>,
)
