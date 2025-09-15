import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  }
])
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}