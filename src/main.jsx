import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Header from './Home/Header'
import Navbar from './Home/Navbar'
import Contract from './Home/Contract'
import About from './Home/About'
import DetailUser from './Home/DetailUser'
import ErrorPage from './Home/ErrorPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar></Navbar>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/header',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Header></Header>
      },
      {
        path: '/about',
        element:<About></About>
      },

      {
        path: '/Contract',
        element: <Contract> </Contract>
        
      },
      {
        path: '/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <DetailUser></DetailUser>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
