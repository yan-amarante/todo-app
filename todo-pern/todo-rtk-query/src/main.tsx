import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home/Home.tsx"
import AdicionarCategoria from "./pages/AdicionarCategoria/AdicionarCategoria.tsx"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children:
      [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/adicionarCategoria",
          element: <AdicionarCategoria/>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
