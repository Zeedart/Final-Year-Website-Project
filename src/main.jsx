import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from "../ContactSection/MainContactSection.jsx"
import NotFound from './NotFound.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/Contact", element: <Contact />},
  {path: "*", element: <NotFound />}
  /* {path: "/Departments", element: <Departments />},
  {path: "/News", element: <News />},
  {path: "/Dashboard", element: <Dashboard />} */
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
