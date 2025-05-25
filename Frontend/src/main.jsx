import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from "../ContactSection/MainContactSection.jsx"
import News from "../NewsSection/MainNewsSection.jsx"
import NotFound from './NotFound.jsx'
import GeologyDep from '../Departments/GeologyDep.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/Contact", element: <Contact />},
  {path: "/News", element: <News />},
  {path: "*", element: <NotFound />},
  {path: "/Geology", element: <GeologyDep />}
  /* {path: "/Departments", element: <Departments />},
  {path: "/News", element: <News />},
  {path: "/Dashboard", element: <Dashboard />} */
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
