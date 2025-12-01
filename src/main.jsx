import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './component/Header.jsx'
import Main from './component/main.jsx'
import Login from './Component/Login.jsx'
import Registration from './Component/Registration.jsx'
import SignIn from './Component/SignIn.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/SignUp',
        element: <Registration> </Registration>
      },
      {
        path: '/SignIn',
        element: <SignIn></SignIn>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
