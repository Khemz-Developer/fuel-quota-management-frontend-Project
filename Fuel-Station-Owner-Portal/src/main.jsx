
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import './App.css'
import { AuthProvider } from './providers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <RouterProvider router={router}/>
  </AuthProvider>
)
