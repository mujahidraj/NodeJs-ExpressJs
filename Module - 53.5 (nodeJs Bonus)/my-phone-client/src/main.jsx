import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App.jsx'
import Main from './Components/Main.jsx';
import Phones from './Components/Phones.jsx';
import Phone from './Components/Phone.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [{
      path : '/phones',
      loader : ()=>fetch("http://localhost:3000/phones"),
      element : <Phones></Phones>
    },
  {
      path : '/phone/:id',
      loader : ({params}) =>fetch(`http://localhost:3000/phones/${params.id}`),
      element : <Phone></Phone>
  }]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
