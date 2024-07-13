import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import AddExpenses from './pages/addExpenses.jsx'
import Navbar from './components/navbar.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },{
    path: "/add",
    elements:<AddExpenses/>
  },{
    path: "/nav",
    elements:<Navbar/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
