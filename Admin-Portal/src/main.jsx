
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { AuthProvider } from "./context/authContext.jsx"
import './index.css'
import router from './router/Router.jsx'
createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <RouterProvider router={router}/>
  </AuthProvider>
)
