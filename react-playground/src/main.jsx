import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import PageOne from './pages/PageOne.jsx'
import About from './pages/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      // path: "/",
      index: true,
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: "/page-one",
      element: <PageOne />
    }
    ]
  }
])

const root = document.getElementById('root');

createRoot(root).render(
  <RouterProvider router={router} />
)

// <StrictMode>
{/* </StrictMode>, */ }