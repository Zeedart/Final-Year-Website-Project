import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from "../ContactSection/MainContactSection.jsx"
import News from "../NewsSection/MainNewsSection.jsx"
import NotFound from './NotFound.jsx'
import GeologyDep from '../Departments/GeologyDep.jsx'
import ComputerEngDep from '../Departments/ComputerEngDep.jsx'
import SafetyDep from '../Departments/SafetyDep.jsx'
import Dashboard from '../Dashboard/Dashboard.jsx'
import Portal from '../Reregistration_portal/Portal.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/Contact", element: <Contact />},
  {path: "/News", element: <News />},
  {path: "*", element: <NotFound />},
  {path: "/Geology", element: <GeologyDep />},
  {path: "/ComputerEngineering", element: <ComputerEngDep/>},
  {path: "/Safety", element: <SafetyDep />},
  {path: "/Dashboard", element: <Dashboard />},
  {path: "/Registration", element: <Portal />}
  /* {path: "/Departments", element: <Departments />},
  {path: "/News", element: <News />}, */
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
