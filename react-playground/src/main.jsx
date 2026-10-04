import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import PageOne from './pages/PageOne.jsx'
import About from './pages/About.jsx'
import Packages from './pages/Packages.jsx'
import PackageDetails from './pages/PackageDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      // path: "/",
      index: true,
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: "/page-one",
      element: <PageOne />
    },
    {
      path: "/packages",
      children: [
        {
          index: true,
          element: <Packages />
        },
        {
          path: ":pId",
          element: <PackageDetails />
        }
      ]
    }
    ]
  },
  // {
  //   path: "*",
  //   errorElement: <Home />
  // }
])

const root = document.getElementById('root');

createRoot(root).render(
  <RouterProvider router={router} />
)

// <StrictMode>
{/* </StrictMode>, */ }