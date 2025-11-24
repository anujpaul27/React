import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Header from './Home/Header'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>
  },
  {
    path:'/about',
    element: <div>Hello going him </div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
