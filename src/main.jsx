import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/reset.css'

import { RouterProvider } from 'react-router-dom'
import routes from './router/routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={routes}></RouterProvider>
  
)
